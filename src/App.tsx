import React, { useState } from "react";
import './index.css';
import {
    DragDropContext,
    Draggable,
    DraggingStyle,
    Droppable,
    DropResult,
    NotDraggingStyle
} from "react-beautiful-dnd";
import TimeZoneComponent from "./components/TimeZoneComponent";

interface Item {
    id: string;
    content: string;
}

// a little function to help us with reordering the result
const reorder = (
    list: Item[],
    startIndex: number,
    endIndex: number
): Item[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const grid = 8;

const getItemStyle = (
    isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
): React.CSSProperties => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    //padding: grid * 2,
     margin: `0 ${grid}px 0 0`,

    // change background colour if dragging
    // background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    // background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    display:'flex',
});


const timeZones: any[] = [
    {id:"jerusalem", content:"Asia/Jerusalem"},
    {id:"new_york", content: "America/New_York"},
    {id:"berlin", content:"Europe/Berlin"}
]
export default function App(): JSX.Element  {

    const [state, setState] = useState(timeZones)

    const onDragEnd = (result: DropResult): void => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items: Item[] = reorder(
            state,
            result.source.index,
            result.destination.index
        );
        setState(items);
    };

    const moveItem = (index:number) => {
        if (index === state.length -1) {
            const items: Item[] = reorder(
                state,
                index,
                0
            );
            setState(items);

        }
        else {
            const items: Item[] = reorder(
                state,
                index,
                index+1
            );
            setState(items);
        }
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable" direction={'horizontal'}>
                {(provided, snapshot): JSX.Element => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {state.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot): JSX.Element => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}
                                    >
                                        <div>
                                            <button onClick={() => moveItem(index)}> Click to move right </button>
                                            <TimeZoneComponent timeZone={item.content} />
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

