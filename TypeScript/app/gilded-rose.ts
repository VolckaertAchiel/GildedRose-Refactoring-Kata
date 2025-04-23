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
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        decreaseSellIn(item);
      }

      switch (item.name) {
        case 'Aged Brie':
          if (item.quality < 50) {
            increaseQuality(item);
            if (item.sellIn < 0 && item.quality < 50) {
              increaseQuality(item);
            }
          }
          break;

        case 'Backstage passes to a TAFKAL80ETC concert':
          if (item.sellIn < 0) {
            item.quality = 0;
          } else {
            if (item.quality < 50) increaseQuality(item);
            if (item.sellIn < 10 && item.quality < 50) increaseQuality(item);
            if (item.sellIn < 5 && item.quality < 50) increaseQuality(item);
          }
          break;

        case 'Sulfuras, Hand of Ragnaros':
          // Legendary item, quality does not change
          break;

        default:
          if (item.quality > 0) {
            decreaseQuality(item)
            if (item.sellIn < 0 && item.quality > 0) {
              decreaseQuality(item)
            }
          }
          break;
      }
    }

    return this.items;
  }
}

const decreaseSellIn = (item: Item) => {
  item.sellIn--
};

const decreaseQuality = (item: Item) => {
  item.quality--
};

const increaseQuality = (item: Item) => {
  item.quality++
}