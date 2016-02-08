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

removeSubTree(root,data)
{            
    if (root )
    {
      if (data < root.data)
     {
         root.left = this.removeSubTree(root.left, data);
      }
       else if (data > root.data)
      {
         root.right =this.removeSubTree(root.right, data);
      }
        else if (root.left != null && root.right != null)
      {
       root.data = this.findMin(root.right);
       root.right = this.removeSubTree(root.right, root.data);
      }
    else if (root.left != null)
     { root = root.left;}
    else
      {root = root.right;}
  }
  return root;
}

findMin(node) {
        if (!this.isEmpty()) {
            if (node === 0)
            { 
                node = this.root;
            }
            while (node.left) {
                node = node.left;
            }
            return node.value;
        }
      }

remove(data){
    this.root=this.removeSubTree(this.root,data);
}


size() {
        function countSubTree(cur) 
        {
            if (cur == null) return 0;
            return 1 + countSubTree(cur.left) + countSubTree(cur.right);
        }
          return countSubTree(this.root);
  }


  isEmpty() {
      if(this.root==null)
         return true;
      else
         return false;
}
}