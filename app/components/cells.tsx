import { Dispatch, SetStateAction } from "react";

/*här gäller för celler för html ska inte vara i */
type Cellprops = {
    id: number;
    go: String;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winningMessage: string;
}


const Cell = ({go, setGo, id, cells, setCells, cell, winningMessage}: Cellprops) => { /*måste bestämma type*/ 
    
    const handleClick= () => {
        if(winningMessage){
            return
        }
        const taken = !!cells[id] /*måste checka om något använd*/
        if(!taken){
             if(go == "circle"){
            handleCellChange("circle")
            setGo("cross")
        }else if(go== "cross"){
             handleCellChange("cross")
             setGo("circle")
        }
        }
     


    }

    /**funktion */
    const handleCellChange = (celltoChange: string) => {
        let copyCells = [...cells]
        copyCells[id] = celltoChange
        setCells(copyCells)
    }

    return <div className="square" onClick={handleClick}>
            <div className={cell}>{cell ? (cell === "circle" ? "O" : "X" ): ""} </div>

    </div>
};
export default Cell;
