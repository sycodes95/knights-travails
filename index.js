

class Graph{
    constructor(){
        this.nodes = {}
        this.edges = 0
    }

    addVert(){
        gameBoard().forEach(e =>{
            this.nodes[e] = [];
        })
        return this.nodes;
        
    }

    addEdge(vert1) {
        makeMoveList(vert1).forEach((e,i)=>{
            if(this.nodes[vert1] && this.nodes[e]){
                this.nodes[vert1].push(e)
                this.edges++
            }
        })
    }
    bfs(start, end){
        
        let node = this.nodes;
        //assigns this.nodes to variable => node
        const queue = []
        
        //create queue variable that holds array
        queue.push(start);
        //push the starting coordinates to the queue
        const visited = []
        //create visited variable that holds array of coords thats been visited
        visited[start] = true;
        //starting coord is obviously already "visited" so we set it to true
        const edges = []
        //create edges variable that holds the number of edges
        edges[start] = 0;
        //start is obviously the coord where we start so we set it to 0;
        const pre = []
        //create pre variable array that holds the previous coords so we can find nodes from the path
        pre[start] = null;

        const buildPath = (end, start, pre) =>{
            
            const stack = []
            //create stack array
            stack.push(start)
            
            console.log(end);
            //push goal(end) to stack
            console.log(stack);
            let u = pre[end];
            //create variable "u" that holds the last coord connected to the end coord
            console.log(u);
            while(u !== start){
                console.log(u);
                //iterate until u is equal to start
                stack.push(u);
                //add u to stack array
                u = pre[u];
                console.log(u);
                //then make u become the last coord of u
                
            }
            console.log(stack);
            stack.push(end)
            //once we get all the prev coords of coords push start to stack
            
            //create variable path that takes the stack and reverses it
            return stack;
        }

        while(queue.length){
            //console.log(queue);
            //while queue HAS elements in it
            let vert1 = queue.shift()
            //console.log(vert1);
            //take the first element from index[0] of queue and assign it to 'vert1'
            

            if(vert1[0] == end[0] && vert1[1] == end[1]){
                //if the vertex we are on matches our goal (end)
                return {
                    //return distance, and path
                    distance: edges,
                    path: buildPath(end, start, pre)
                };
            }
            for(let i = 0; i < node[vert1].length; i++){
                //if node[vert1] has length, iterate
                if(!visited[node[vert1][i]]){
                    //if visited array does not contain [node[vert1][i]], do these...
                    
                    visited[node[vert1][i]] = true;
                    //add [node[vert1][i]] to visited array and set it to true
                    queue.push(node[vert1][i]);
                    //push node[vert1][i] to queue
                    edges[node[vert1][i]] = edges[vert1] + 1
                    pre[node[vert1][i]] = vert1;
                    
                    
                }
            }
        }
        return false
    }
}
function makeMoveList(start){
    let moves = []
    if((start[0] + 2) <= 8 && (start[1] + 1) <= 8){
        moves.push([start[0]+2, start[1]+1])
    }
    if((start[0] + 2) <= 8 && (start[1] - 1) >= 1){
        moves.push([start[0]+2, start[1]-1])
    }
    if((start[0] - 2) >= 1 && (start[1] + 1) <= 8){
        moves.push([start[0]-2, start[1]+1])
    }
    if((start[0] - 2) >= 1 && (start[1] - 1) >= 1){
        moves.push([start[0]-2, start[1]-1])
    }
    if((start[0] + 1) <= 8 && (start[1] - 2) >= 1){
        moves.push([start[0]+1, start[1]-2])
    }
    if((start[0] - 1) >= 1 && (start[1] - 2) >= 1){
        moves.push([start[0]-1, start[1]-2])
    }
    if((start[0] + 1) <= 8 && (start[1] + 2) <= 8){
        moves.push([start[0]+1, start[1]+2])
    }
    if((start[0] - 1) >= 1 && (start[1] + 2) <= 8){
        moves.push([start[0]-1, start[1]+2])
    }
    return moves;


}
let yAxis = [1,2,3,4,5,6,7,8]
let xAxis = [1,2,3,4,5,6,7,8]

const gameBoard = ()=>{
    let combos = [];
    xAxis.forEach(el =>{
        for(let i = 0; i < yAxis.length; i++) combos.push([el, yAxis[i]])
    })
    
    return combos;
}
console.log(gameBoard())
function knightMoves(start, end){
    let g = new Graph()
    g.addVert()
    gameBoard().forEach(e =>{
        g.addEdge(e)
    });
    return g.bfs(start, end)
    
}
console.log(knightMoves([1,1], [4,6]))








