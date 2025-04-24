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
        // Decrease sellIn for all items except "Sulfuras, Hand of Ragnaros" since it never has to be sold or decreases in Quality
        decreaseSellIn(item);
      }
      switch (item.name) {
        case 'Aged Brie':
          increaseQuality(item);
          if (item.sellIn < 0) {
            increaseQuality(item);
          }
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (item.sellIn < 0) {
            item.quality = 0;
          } else {
            increaseQuality(item);
            if (item.sellIn < 10) increaseQuality(item);
            if (item.sellIn < 5) increaseQuality(item);
          }
          break;
        case 'Conjured Mana Cake':
          decreaseQuality(item);
          decreaseQuality(item);
          if (item.sellIn < 0) {
            decreaseQuality(item);
            decreaseQuality(item);
          }
          break;
        default:
          if (item.name !== 'Sulfuras, Hand of Ragnaros') { //not moving this to the helper to keep helpers reusable
            decreaseQuality(item)
            if (item.sellIn < 0) {
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
  if (item.quality > 0) {
    item.quality--
  };
};

const increaseQuality = (item: Item) => {
  if (item.quality < 50) {
    item.quality++
  }
}