export class JournalEntry {
    id: string;
    content: string;
    date: string;
  
    constructor(content: string) {
      this.id = crypto.randomUUID();
      this.content = content;
      this.date = new Date().toISOString();
    }
  
    getFormattedDate() {
      return new Date(this.date).toLocaleString();
    }
  }