'use strict';

class BinaryTree {
  constructor() { 
    this.root = null;

  }

  insert(data) {

    var root = this.root;

    if (!root) {
      this.root = new Node(data,null,null);
      return;
    }

    var cur = root;
     var node = new Node(data,null,null);

    while(cur){
          if(data < cur.data){
            if(!cur.left){
                cur.left = node;
                break;
              }

              else{
                cur = cur.left;
            }
        }

        else{

            if(!cur.right){
                cur.right = node;
                break;
            }

            else{
                cur = cur.right;
            }
        }
      }
  }


  contains(data) {
    var found = false;
    var cur=this.root;
     while(!found && cur)
     {
      if (data<cur.data)
      {
        cur=cur.left;
      }
      else if (data>cur.data)
      {
        cur=cur.right;
      }
      else{
        found=true;
      }
     }
return found;
  }

  remove(data) {

  }

  size() {

  }

  isEmpty() {

  }
}