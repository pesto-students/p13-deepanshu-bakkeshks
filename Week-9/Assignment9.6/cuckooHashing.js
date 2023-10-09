/*
Problem: Cuckoo Hashing
Implement the Cuckoo Hashing algorithm using JavaScript. Cuckoo Hashing is a hashing technique that resolves 
collisions by using multiple hash functionsand alternate placements of elements in different hash tables.
*/
class CuckooHashing {
  constructor(size) {
    this.hashTable1 = new Array(size);
    this.hashTable2 = new Array(size);

    this.hashFunction1 = (key) => {
      return key % size;
    };

    this.hashFunction2 = (key) => {
      return (key ^ (key >>> 5)) % size;
    };
  }

  insert(key, value) {
    const index1 = this.hashFunction1(key);
    if (!this.hashTable1[index1]) {
      this.hashTable1[index1] = { key, value };
      return;
    }

    const index2 = this.hashFunction2(key);
    if (!this.hashTable2[index2]) {
      this.hashTable2[index2] = { key, value };
      return;
    }

    this.rehash();

    this.hashTable1[index1] = { key, value };
  }

  rehash() {
    const newHashTable = new Array(this.hashTable1.length * 2);

    for (const entry of this.hashTable1) {
      if (entry) {
        const index = this.hashFunction1(entry.key);
        newHashTable[index] = entry;
      }
    }

    for (const entry of this.hashTable2) {
      if (entry) {
        const index = this.hashFunction2(entry.key);
        newHashTable[index] = entry;
      }
    }

    this.hashTable1 = newHashTable;
    this.hashTable2 = new Array(this.hashTable1.length);
  }

  displayHashTable() {
    console.log("HashTable 1:");
    for (const entry of this.hashTable1) {
      if (entry) {
        console.log(`${entry.key}: ${entry.value}`);
      }
    }

    console.log("HashTable 2:");
    for (const entry of this.hashTable2) {
      if (entry) {
        console.log(`${entry.key}: ${entry.value}`);
      }
    }
  }
}
const cuckooHashing = new CuckooHashing(10);

cuckooHashing.insert(12, "apple");
cuckooHashing.insert(43, "banana");
cuckooHashing.insert(15, "orange");
cuckooHashing.insert(27, "mango");
cuckooHashing.insert(37, "pineapple");

cuckooHashing.displayHashTable();

// Output: "HashTable 1:"
// "12: apple"
// "43: banana"
// "15: orange"
// "27: mango"
// "HashTable 2:"
// "37: pineapple"
