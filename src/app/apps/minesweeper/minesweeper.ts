import { DecimalPipe } from '@angular/common';
import { Component, computed, OnDestroy, signal } from '@angular/core';

type Cell = {
  row: number;
  col: number;
  mine: boolean;
  revealed: boolean;
  flagged: boolean;
  adjacent: number;
};

type GameStatus = 'ready' | 'playing' | 'won' | 'lost';

const ROWS = 9;
const COLS = 9;
const MINES = 10;

@Component({
  selector: 'app-minesweeper',
  imports: [DecimalPipe],
  templateUrl: './minesweeper.html',
  styleUrl: './minesweeper.scss',
})
export class MinesweeperApp implements OnDestroy {
  readonly rows = ROWS;
  readonly cols = COLS;
  readonly board = signal<Cell[][]>(createEmptyBoard());
  readonly status = signal<GameStatus>('ready');
  readonly elapsed = signal(0);
  private timerId: ReturnType<typeof setInterval> | null = null;

  readonly minesLeft = computed(() => {
    const flagged = this.board()
      .flat()
      .filter((cell) => cell.flagged).length;
    return MINES - flagged;
  });

  readonly face = computed(() => {
    switch (this.status()) {
      case 'lost':
        return '😵';
      case 'won':
        return '😎';
      default:
        return '🙂';
    }
  });

  ngOnDestroy(): void {
    this.stopTimer();
  }

  reset(): void {
    this.stopTimer();
    this.board.set(createEmptyBoard());
    this.status.set('ready');
    this.elapsed.set(0);
  }

  onLeftClick(cell: Cell): void {
    if (this.status() === 'won' || this.status() === 'lost') {
      return;
    }
    if (cell.flagged || cell.revealed) {
      return;
    }

    let board = this.board();
    if (this.status() === 'ready') {
      board = placeMines(board, cell.row, cell.col);
      this.board.set(board);
      this.status.set('playing');
      this.startTimer();
    }

    if (board[cell.row][cell.col].mine) {
      this.revealAllMines(board);
      this.status.set('lost');
      this.stopTimer();
      return;
    }

    const next = revealFlood(board, cell.row, cell.col);
    this.board.set(next);
    if (checkWin(next)) {
      this.status.set('won');
      this.stopTimer();
    }
  }

  onRightClick(event: MouseEvent, cell: Cell): void {
    event.preventDefault();
    if (this.status() === 'won' || this.status() === 'lost' || cell.revealed) {
      return;
    }
    if (this.status() === 'ready') {
      this.status.set('playing');
      this.startTimer();
    }

    this.board.update((board) =>
      board.map((row) =>
        row.map((item) =>
          item.row === cell.row && item.col === cell.col
            ? { ...item, flagged: !item.flagged }
            : item,
        ),
      ),
    );
  }

  private revealAllMines(board: Cell[][]): void {
    this.board.set(
      board.map((row) =>
        row.map((cell) => (cell.mine ? { ...cell, revealed: true } : cell)),
      ),
    );
  }

  private startTimer(): void {
    this.stopTimer();
    this.timerId = setInterval(() => {
      this.elapsed.update((value) => Math.min(value + 1, 999));
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

function createEmptyBoard(): Cell[][] {
  return Array.from({ length: ROWS }, (_, row) =>
    Array.from({ length: COLS }, (_, col) => ({
      row,
      col,
      mine: false,
      revealed: false,
      flagged: false,
      adjacent: 0,
    })),
  );
}

function placeMines(board: Cell[][], safeRow: number, safeCol: number): Cell[][] {
  const next = board.map((row) => row.map((cell) => ({ ...cell })));
  let placed = 0;
  while (placed < MINES) {
    const row = Math.floor(Math.random() * ROWS);
    const col = Math.floor(Math.random() * COLS);
    if ((row === safeRow && col === safeCol) || next[row][col].mine) {
      continue;
    }
    next[row][col].mine = true;
    placed += 1;
  }

  for (let row = 0; row < ROWS; row += 1) {
    for (let col = 0; col < COLS; col += 1) {
      if (next[row][col].mine) {
        continue;
      }
      next[row][col].adjacent = countAdjacent(next, row, col);
    }
  }
  return next;
}

function countAdjacent(board: Cell[][], row: number, col: number): number {
  let count = 0;
  for (let r = row - 1; r <= row + 1; r += 1) {
    for (let c = col - 1; c <= col + 1; c += 1) {
      if (r < 0 || c < 0 || r >= ROWS || c >= COLS) {
        continue;
      }
      if (board[r][c].mine) {
        count += 1;
      }
    }
  }
  return count;
}

function revealFlood(board: Cell[][], row: number, col: number): Cell[][] {
  const next = board.map((line) => line.map((cell) => ({ ...cell })));
  const stack: Array<[number, number]> = [[row, col]];

  while (stack.length > 0) {
    const [r, c] = stack.pop()!;
    const cell = next[r][c];
    if (cell.revealed || cell.flagged) {
      continue;
    }
    cell.revealed = true;
    if (cell.mine || cell.adjacent > 0) {
      continue;
    }
    for (let nr = r - 1; nr <= r + 1; nr += 1) {
      for (let nc = c - 1; nc <= c + 1; nc += 1) {
        if (nr < 0 || nc < 0 || nr >= ROWS || nc >= COLS) {
          continue;
        }
        if (!next[nr][nc].revealed && !next[nr][nc].flagged) {
          stack.push([nr, nc]);
        }
      }
    }
  }
  return next;
}

function checkWin(board: Cell[][]): boolean {
  return board.flat().every((cell) => cell.mine || cell.revealed);
}
