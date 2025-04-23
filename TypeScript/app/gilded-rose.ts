export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case 'Aged Brie':
          if (item.quality < 50) {
            item.quality += 1;
          }

          item.sellIn = item.sellIn - 1;
          if (item.sellIn < 0) {

            if (item.quality < 50) {
              item.quality += 1;
            }
          }
          break;

        case 'Backstage passes to a TAFKAL80ETC concert':
          if (item.quality < 50) {
            item.quality += 1;
            if (item.sellIn < 11) {
              item.quality += 1;
            }
            if (item.sellIn < 6) {
              item.quality += 1;
            }
            if (item.quality > 50) {
              item.quality = 50;
            }
          }

          item.sellIn = item.sellIn - 1;
          if (item.sellIn < 0) {

            if (item.sellIn <= 0) {
              item.quality = 0;
            }
          }

          break;

        case 'Sulfuras, Hand of Ragnaros':
          // Legendary item, quality does not change
          break;

        default:
          if (item.quality > 0) {
            item.quality -= 1;
          }
          break;
      }



      if (item.name != 'Sulfuras, Hand of Ragnaros' && item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        item.sellIn = item.sellIn - 1;
        if (item.sellIn < 0) {
          if (item.quality > 0) {
            item.quality -= 1;
          }
        }
      }
    }

    return this.items;
  }
}
