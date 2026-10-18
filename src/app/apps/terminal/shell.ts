export type ShellEffect = 'stop' | 'bleed';

export interface ShellReply {
  lines: string[];
  cwd: string;
  clear?: boolean;
  effect?: ShellEffect;
}

type Node =
  | { kind: 'dir'; children: Record<string, Node> }
  | { kind: 'file'; content: string };

const HOME = '/home/helio';

const ROOT: Node = {
  kind: 'dir',
  children: {
    home: {
      kind: 'dir',
      children: {
        helio: {
          kind: 'dir',
          children: {
            'notas.txt': {
              kind: 'file',
              content: 'Lembre-se de usar o que aprendeu com o Linux. Nem todos os comandos foram listados pelo help.\n',
            },
            '.local': {
              kind: 'dir',
              children: {
                'nota.txt': {
                  kind: 'file',
                  content: 'Nota — não imprimir\n\nOs comandos da bomba foram enviados para o TI.\n',
                },
              },
            },
          },
        },
      },
    },
    var: {
      kind: 'dir',
      children: {
        log: {
          kind: 'dir',
          children: {
            'duto.log': {
              kind: 'file',
              content: `12/04/1988  320 C  fluxo estável
14/04/1988  890 C  salto repentino
15/04/1988  1400 C  bomba do duto central ligada
`,
            },
          },
        },
      },
    },
  },
};

export function runShell(cwd: string, raw: string): ShellReply {
  const line = raw.trim();
  if (!line) {
    return { lines: [], cwd };
  }
  if (line.includes('|') || line.includes('>') || line.includes('<')) {
    return { lines: ['shell reduzido: sem pipe'], cwd };
  }

  const parts = line.split(/\s+/);
  const cmd = parts[0];
  const args = parts.slice(1);

  switch (cmd) {
    case 'help':
      return { lines: ['ls  cd  pwd  cat  grep  clear  whoami'], cwd };
    case 'whoami':
      return { lines: ['helio'], cwd };
    case 'pwd':
      return { lines: [cwd], cwd };
    case 'clear':
      return { lines: [], cwd, clear: true };
    case 'ls':
      return list(cwd, args);
    case 'cd':
      return changeDir(cwd, args);
    case 'cat':
      return readFile(cwd, args);
    case 'grep':
      return search(cwd, args);
    case 'dutoctl':
      return dutoctl(cwd, args);
    default:
      return { lines: [`${cmd}: comando não encontrado`], cwd };
  }
}

function dutoctl(cwd: string, args: string[]): ShellReply {
  const action = args[0];
  if (!action || action === '--help' || action === 'help') {
    return { lines: ['uso: dutoctl status|stop <alvo>', 'alvos: central'], cwd };
  }

  const target = args[1];
  if (action !== 'status' && action !== 'stop' && action !== 'bleed') {
    return { lines: ['ação desconhecida. veja dutoctl --help'], cwd };
  }
  if (target !== 'central') {
    return { lines: [target ? 'alvo desconhecido' : 'informe o alvo'], cwd };
  }

  if (action === 'status') {
    return {
      lines: ['sucção do duto central segue alimentando o que está lá dentro.'],
      cwd,
    };
  }
  if (action === 'stop') {
    return {
      lines: ['alimentação do duto central cortada de uma vez.'],
      cwd,
      effect: 'stop',
    };
  }
  return {
    lines: [
      'linha de resfriamento aberta no duto central.',
      'fluido frio em contato com o que está lá dentro.',
    ],
    cwd,
    effect: 'bleed',
  };
}

function list(cwd: string, args: string[]): ShellReply {
  const pathArg = args.filter((arg) => !arg.startsWith('-')).at(-1);
  const node = resolve(cwd, pathArg ?? '.');
  if (!node) {
    return { lines: [`ls: não existe: ${pathArg ?? cwd}`], cwd };
  }
  if (node.kind === 'file') {
    return { lines: [baseName(pathArg ?? cwd)], cwd };
  }
  const showHidden = args.some((arg) => arg.startsWith('-') && arg.includes('a'));
  const names = Object.keys(node.children)
    .filter((name) => showHidden || !name.startsWith('.'))
    .sort();
  if (showHidden) {
    names.unshift('..');
    names.unshift('.');
  }
  return { lines: names.length ? [names.join('  ')] : [], cwd };
}

function changeDir(cwd: string, args: string[]): ShellReply {
  const target = args[0] ?? HOME;
  const node = resolve(cwd, target);
  if (!node) {
    return { lines: [`cd: não existe: ${target}`], cwd };
  }
  if (node.kind !== 'dir') {
    return { lines: [`cd: não é um diretório: ${target}`], cwd };
  }
  return { lines: [], cwd: normalize(cwd, target) };
}

function readFile(cwd: string, args: string[]): ShellReply {
  const target = args[0];
  if (!target) {
    return { lines: ['uso: cat arquivo'], cwd };
  }
  const node = resolve(cwd, target);
  if (!node) {
    return { lines: [`cat: não existe: ${target}`], cwd };
  }
  if (node.kind === 'dir') {
    return { lines: [`cat: é um diretório: ${target}`], cwd };
  }
  return { lines: node.content.replace(/\n$/, '').split('\n'), cwd };
}

function search(cwd: string, args: string[]): ShellReply {
  const numbered = args[0] === '-n';
  const rest = numbered ? args.slice(1) : args;
  const pattern = rest[0];
  const file = rest[1];
  if (!pattern || !file) {
    return { lines: ['uso: grep [-n] padrão arquivo'], cwd };
  }
  const node = resolve(cwd, file);
  if (!node || node.kind !== 'file') {
    return { lines: [`grep: não existe: ${file}`], cwd };
  }
  const hits = node.content
    .split('\n')
    .map((text, index) => ({ text, index }))
    .filter((row) => row.text.includes(pattern))
    .map((row) => (numbered ? `${row.index + 1}:${row.text}` : row.text));
  return { lines: hits, cwd };
}

function resolve(cwd: string, input: string): Node | undefined {
  const path = normalize(cwd, input);
  const parts = path.split('/').filter(Boolean);
  let node: Node = ROOT;
  for (const part of parts) {
    if (node.kind !== 'dir' || !node.children[part]) {
      return undefined;
    }
    node = node.children[part];
  }
  return node;
}

function normalize(cwd: string, input: string): string {
  const expanded = expandHome(input);
  const start = expanded.startsWith('/') ? [] : cwd.split('/').filter(Boolean);
  const parts = expanded.split('/').filter((part) => part && part !== '.');
  const stack = [...start];
  for (const part of parts) {
    if (part === '..') {
      stack.pop();
    } else {
      stack.push(part);
    }
  }
  return `/${stack.join('/')}` || '/';
}

function expandHome(input: string): string {
  if (input === '~') {
    return HOME;
  }
  if (input.startsWith('~/')) {
    return `${HOME}${input.slice(1)}`;
  }
  return input;
}

function baseName(path: string): string {
  const parts = path.split('/').filter(Boolean);
  return parts.at(-1) ?? path;
}
