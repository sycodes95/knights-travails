
/*from [4][4] 
[4+2][4+1] -> 2 UP / 1 RIGHT 
[4+2][4-1] -> 2 UP / 1 LEFT

2, 1 [+15]
2, -1

[4-2][4+1] -> 2 DOWN / 1 RIGHT
[4-2][4-1] -> 2 DOWN / 1 LEFT

-2, 1
-2, -1

[4+1][4-2] -> 1 UP/ 2 LEFT
[4-1][4-2] -> 1 DOWN/ 2 LEFT

1, -2
-1, -2

[4+1][4+2] -> 1 UP/ 2 RIGHT
[4-1][4+2] -> 1 DOWN/ 2 RIGHT

1, 2
-1, 2

+2+1 / +2-1 / -2+1 / -2-1
+1-2 / -1-2 / +1+2 / -1+2


*/

class Tree{
    constructor(start){
        this.root = this.buildTree(start);
    }
    buildTree(start){
        if(start[0] < 1 || start[1] < 1 || start[0] > 8 || start[1] > 8){
            return null;
            
        }
        
        console.log(gameBoard()[1])
        /*
        gameBoard().forEach((e, i)=>{
            
        })
        */
        let root = new Moves(start)
        
        // 2 UP / 1 RIGHT 
        if((start[0] + 2) <= 8 && (start[0] + 2) >= 1 && (start[1] + 1) <= 8 && (start[1] + 1) >= 1){
            root.one = [start[0]+2, start[1]+1]
        } else {
            root.one = null;
        }
        // 2 UP / 1 LEFT
        if((start[0] + 2) <= 8 && (start[0] + 2) >= 1 && (start[1] - 1) >= 1 && (start[1] - 1) <= 8){
            root.two = [start[0]+2, start[1]-1]
        } else {
            root.two = null;
        }
        // 2 DOWN / 1 RIGHT
        if((start[0] - 2) >= 1 && (start[0] - 2) <= 8 && (start[1] + 1) <= 8 && (start[1] + 1) >= 1){
            root.three = [start[0]-2, start[1]+1]
        } else {
            root.three = null;
        }
        // 2 DOWN / 1 LEFT
        if((start[0] - 2) >= 1 && (start[0] - 2) <= 8 && (start[0] - 1) >= 1 && (start[0] - 1) <= 8){
            root.four = [start[0]-2, start[1]-1]
        } else {
            root.four = null;
        }
        // 1 UP/ 2 LEFT
        if((start[0] + 1) <= 8 && (start[0] + 1) >= 1 && (start[0] - 2) >= 1 && (start[0] - 2) <= 8){
            root.five = [start[0]+1, start[1]-2]
        } else {
            root.five = null;
        }
        // 1 DOWN/ 2 LEFT
        if((start[0] - 1) >= 1 && (start[0] - 1) <= 8 && (start[0] - 2) >= 8 && (start[0] - 2) <= 1){
            root.six = [start[0]-1, start[1]-2]
        } else {
            root.six = null;
        }
        // 1 UP/ 2 RIGHT
        if((start[0] + 1) <= 8 && (start[0] + 2) <= 8){
            root.seven = [start[0]+1, start[1]+2]
        } else {
            root.seven = null;
        }
        // 1 DOWN/ 2 RIGHT
        if((start[0] - 1) >= 1 && (start[0] + 2) <= 8){
            root.eight = [start[0]-1, start[1]+2]
        } else {
            root.eight = null;
        }
        return root;
    }
}

class Moves{
    constructor(current,one,two,three,four,five,six,seven,eight){
        this.current = current
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five = five;
        this.six = six;
        this.seven = seven;
        this.eight = eight;

    }

}
class Graph{
    constructor(){
        this.nodes = {}
    }

    addNode(node){
        this.nodes[node] = [];
    }

    addEdge(source, destination) {
        if(!this.nodes[source] || !this.nodes[destination]){
            return false;
        }

        if(!this.nodes[source].includes(destination)){
            this.nodes[source].push(destination);
        }

        if(!this.nodes[destination].includes(source)){
            this.nodes[destination].push(source)
        }
    }

}