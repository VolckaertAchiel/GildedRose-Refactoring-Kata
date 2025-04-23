import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  // Regular items
  describe('Regular Items', () => {
    it('should decrease quality and sellIn by 1 for normal items', () => {
      const gildedRose = new GildedRose([new Item('normal item', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
      expect(items[0].sellIn).toBe(9);
    });

    it('should degrade quality twice as fast after sellIn date', () => {
      const gildedRose = new GildedRose([new Item('normal item', 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    it('should not reduce quality below 0', () => {
      const gildedRose = new GildedRose([new Item('normal item', 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  // Aged Brie
  describe('Aged Brie', () => {
    it('should increase in quality over time', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    it('should not increase quality beyond 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  // Sulfuras
  describe('Sulfuras', () => {
    it('should never decrease in quality or sellIn', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(10);
    });
  });

  // Backstage passes
  describe('Backstage passes', () => {
    it('should increase quality by 1 when more than 10 days remain', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
    });

    it('should increase quality by 2 when 10 days or less remain', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
    });

    it('should increase quality by 3 when 5 days or less remain', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(23);
    });

    it('should drop quality to 0 after concert', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

    it('should not increase quality beyond 50', () => {
      const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  // Multiple items
  it('should handle multiple items correctly', () => {
    const gildedRose = new GildedRose([
      new Item('normal item', 10, 20),
      new Item('Aged Brie', 10, 20),
      new Item('Sulfuras, Hand of Ragnaros', 10, 80)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
    expect(items[1].quality).toBe(21);
    expect(items[2].quality).toBe(80);
  });
});
