import './App.css';
import TimeZoneComponent from "./components/TimeZoneComponent";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const timeZones: string[] = ["Asia/Jerusalem", "America/New_York","Europe/Berlin" ]

const reorder = (list: any, startIndex: number, endIndex: number) :any => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

function App() {
  return (
      // <DragDropContext onDragEnd={}>
          <div className={`flex space-x-20 p-10`}>
              {
                  timeZones.map((timeZone:string) => {
                      return(
                          <TimeZoneComponent timeZone={timeZone} />
                      )
                  })
              }
          </div>
      // </DragDropContext>
  );
}

export default App;
