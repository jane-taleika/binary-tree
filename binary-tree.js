'use strict';

class BinaryTree {
  constructor() { 
    this.root = null;

  }

  insert(data) {
    var node = new Node(data,null,null);
    var root = this.root;
    var cur;

    if (!root)
      this.root=node;
    else
    {
      cur=root;
      while (true)
      {
        if (data<cur.data)
        {
          if(!cur.left){
                cur.left = newNode;
                break;
              }
              else 
                cur=cur.left;
        }
        else if (data>cur.data)
        {
          if(!cur.right)
          {
            cur.rirght=node;
            break;
          }
          else
            cur=cur.right;
        }

      }
    }

  }

  contains(data) {

  }

  remove(data) {

  }

  size() {

  }

  isEmpty() {

  }
}