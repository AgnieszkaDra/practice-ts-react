import { JournalEntry } from './JournalEntry'

export class JournalManager {
  private entries: JournalEntry[] = [];
  private storageKey = 'journal_entries';

  constructor() {
    this.loadEntries();
  }

  // Ładowanie wpisów z localStorage
  private loadEntries() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      const parsedEntries: JournalEntry[] = JSON.parse(stored);
      this.entries = parsedEntries.map(entry => new JournalEntry(entry.content));
    }
  }

  // Zapis wpisów do localStorage
  private saveEntries() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.entries));
  }

  // Dodawanie nowego wpisu
  addEntry(content: string) {
    const newEntry = new JournalEntry(content);
    this.entries = [newEntry, ...this.entries];
    this.saveEntries();
  }

  // Usuwanie wpisu
  deleteEntry(id: string) {
    this.entries = this.entries.filter(entry => entry.id !== id);
    this.saveEntries();
  }

  // Pobranie wszystkich wpisów
  getEntries(): JournalEntry[] {
    return this.entries;
  }
}