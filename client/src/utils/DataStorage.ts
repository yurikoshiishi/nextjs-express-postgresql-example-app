class DataStorage {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  get(key: string): object | null {
    const jsonString = this.storage.getItem(key);

    if (!jsonString) {
      return {};
    }

    return JSON.parse(jsonString);
  }

  set(key: string, items: object) {
    const jsonString = JSON.stringify(items);
    this.storage.setItem(key, jsonString);
  }

  hasItem(key: string, item: string) {
    return Boolean(this.get(key)[item]);
  }

  addItem(key: string, item: string) {
    const items = this.get(key);
    items[item] = true;
    this.set(key, items);
  }

  removeItem(key: string, item: string) {
    const items = this.get(key);

    if (!items) {
      return;
    }

    items[item] = false;
    this.set(key, items);
  }
}

export default DataStorage;
