
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


*/

class Graph{
    constructor(){
        this.nodes = {}
    }

    addVert(vert1){
        this.nodes[vert1] = [];
    }

    addEdge(vert1) {
        makeMoveList(vert1).forEach((e,i)=>{
            if(this.nodes[vert1] && this.nodes[e]){
                this.nodes[vert1].push(e)
                
            }
        })
    }
    bfs(start, adjList){
        let dist = []
        for(let i = 0; i < gameBoard().length; i++){
            dist[i] = Math.max()
        }
        let q = []

        dist[start] = 0
        q.push(start)

        while(q.length > 0){
            let node = q.shift()
        }
        
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
function knightMoves(start, end, moveList = [], queue = [], visited = []){
    moveList.push(start)
    console.log(queue)
    
    let g = new Graph()
    gameBoard().forEach(e =>{
        g.addVert(e)
    });
    gameBoard().forEach(e =>{
        g.addEdge(e)
    });
    g.nodes[start].forEach(e =>{
        queue.push(e)
        visited.push(e)
    })
    console.log(visited)
    if(start[0] == end[0] && start[1] == end[1]){
        console.log(start);
        g.nodes[moveList[0]].forEach(e =>{

        });
        console.log(moveList)
        return moveList;
        
    }
    
    knightMoves(queue.shift(), end, moveList, queue, visited)
    
}
knightMoves([1,1], [3,5])

function findPath(start, moveList){
    let g = new Graph()


}





