# Monitor

Site de RPG que simula o monitor de um computador de laboratório. A interface imita um Windows XP e é feita só com Angular.

## Fase atual

Área de trabalho funcional:

- Papel de parede vazio (fundo azul sólido, sem imagem)
- Ícones genéricos na área de trabalho (Pasta, Documento, Aplicativo, Lixeira)
- Barra de tarefas com botão Iniciar, programas abertos e relógio
- Janela vazia ao dar duplo clique em um ícone (minimizar, fechar e arrastar)

## Fundação

Os atalhos não estão espalhados no layout. Eles vêm de um único arquivo de dados (`src/app/core/data/desktop-items.ts`). Para adicionar um app depois, basta incluir um item nessa lista.

O `WindowManagerService` controla abrir, focar, minimizar e fechar janelas. O conteúdo dos programas ainda está vazio de propósito: a casca do SO vem primeiro.

## Como rodar

```bash
npm install
npm start
```

Abra `http://localhost:4200`.

## Como testar

1. A tela deve ocupar o navegador inteiro, com fundo azul, ícones à esquerda e barra embaixo.
2. Clique em um ícone para selecioná-lo. Clique no vazio para desmarcar.
3. Duplo clique abre uma janela vazia e um botão na barra de tarefas.
4. Minimize, feche e arraste a janela pela barra de título.
5. O relógio no canto direito mostra `HH:mm`.
