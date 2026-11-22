export class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.validate();
  }

  validate() {
    if (!this.name || this.name.trim() === '') {
      throw new Error('Le nom du produit ne peut pas être vide.');
    }
    if (typeof this.price !== 'number' || !isFinite(this.price) || this.price < 0) {
      throw new Error('Le prix doit être un nombre fini supérieur ou égal à 0.');
    }
    if (!Number.isInteger(this.stock) || this.stock < 0) {
      throw new Error('Le stock doit être un entier supérieur ou égal à 0.');
    }
  }
}