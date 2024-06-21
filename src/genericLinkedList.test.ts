import { Node, Linkedlist } from './genericLinkedist'

describe('Node', () => {
  test('should initialize with given data and null next', () => {
    const node = new Node(1);
    expect(node.data).toBe(1);
    expect(node.next).toBe(null);
  });
});

describe('Linkedlist', () => {
  test('should initialize with null head and tail', () => {
    const list = new Linkedlist();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  describe('appendItemToList', () => {
    test('should append an item to an empty list', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      expect(list.head?.data).toBe(1);
      expect(list.tail?.data).toBe(1);
      expect(list.head?.next).toBe(null);
    });

    test('should append multiple items to the list', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(2);
      list.appendItemToList(3);

      expect(list.head?.data).toBe(1);
      expect(list.head?.next?.data).toBe(2);
      expect(list.tail?.data).toBe(3);
      expect(list.tail?.next).toBe(null);
    });
  });

  describe('insertBefore', () => {
    test('should insert before the head node', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(2);

      const targetNode = list.head!;
      list.insertBefore(0, targetNode);

      expect(list.head?.data).toBe(0);
      expect(list.head?.next?.data).toBe(1);
    });

    test('should insert before a middle node', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(3);
      const targetNode = list.head!.next!;
      list.insertBefore(2, targetNode);

      expect(list.head?.next?.data).toBe(2);
      expect(list.head?.next?.next?.data).toBe(3);
    });

    test('should insert before the last node', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(2);
      list.appendItemToList(4);
      const targetNode = list.tail!;
      list.insertBefore(3, targetNode);

      expect(list.head?.next?.next?.data).toBe(3);
      expect(list.tail?.data).toBe(4);
    });
  });

  describe('insertAfter', () => {
    test('should insert after the head node', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.insertAfter(2, 1);

      expect(list.head?.next?.data).toBe(2);
    });

    test('should insert after a middle node', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(2);
      list.insertAfter(3, 2);

      expect(list.head?.next?.next?.data).toBe(3);
    });

    test('should insert after the last node', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(2);
      list.insertAfter(3, 2);

      expect(list.tail?.data).toBe(3);
    });

    test('should not change the list if targetData does not exist', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(2);
      list.insertAfter(3, 4);

      expect(list.tail?.data).toBe(2);
    });
  });
    describe('removeLast', () => {
    test('should return false for an empty list', () => {
      const list = new Linkedlist();
      expect(list.removeLast()).toBe(false);
    });

    test('should remove the only node in a single-node list', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      expect(list.removeLast()).toBe(true);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });

    test('should remove the last node in a multi-node list', () => {
      const list = new Linkedlist();
      list.appendItemToList(1);
      list.appendItemToList(2);
      list.appendItemToList(3);

      expect(list.removeLast()).toBe(true);
      expect(list.tail?.data).toBe(2);
      expect(list.tail?.next).toBe(null);
    });
  });
});
