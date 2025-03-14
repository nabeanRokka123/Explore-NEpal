import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import Mountain5 from "../assets/111.jpg"
import Mountain6 from "../assets/01.jpg"

import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination =()=>{

    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the oppurtunity to see a lot, within a time frame.</p>
            
            <DestinationData
               className="first-des"
              heading =" Gosaikunda,Rasuwa"

              text="Gosaikunda, als
              o spelled Gosainkunda, is a lake in Nepal's Langtang National Park, located at an elevation of 4,380 m (14,370 ft) in the Rasuwa District with a surface area of 13.8 ha (34 acres).[2] Together with associated lakes, the Gosaikunda Lake complex is 1,030 ha (2,500 acres) in size and was designated a Ramsar site on 29 September 2007.[3]
        
        The lake melts to form the Trishuli River; it remains frozen for six months in the winter October to June. There are 108 lakes in the vicinity. The Lauribina La pass at an elevation of 4,610 m (15,120 ft) is on its outskirts."
            

        img1={Mountain1}
        img2={Mountain2}

            />

<DestinationData

className="first-des-reverse"
              heading =" API Base camp, Nepal"

              text="The Annapurna Sanctuary is a high glacial basin lying 40 km directly north of Pokhara. This oval-shaped plateau sits at an altitude of over 4000 metres,[1]: 29  and is surrounded by a ring of mountains, the Annapurna range, most of which are over 7000 metres.[2] With the only entrance being a narrow valley between the peaks of Hiunchuli and Machapuchare, where run-off from glaciers drains into the Modi Khola River, the Sanctuary was not penetrated by outsiders until 1956.[1]: 29  Because of the high mountains on all sides, the Annapurna Sanctuary receives only seven hours of sunlight a day at the height of summer.[1]: 29  The south-facing slopes are covered in dense tropical jungles of rhododendron and bamboo, while the north-facing slopes, in the rain shadow, have a drier colder climate similar to that of the near-by Tibetan Plateau."
            

        img1={Mountain3}
        img2={Mountain4}

            />

<DestinationData

className="first-des"
              heading =" Tsho Rolpa, Nepal"

              text="The Annapurna Sanctuary is a high glacial basin lying 40 km directly north of Pokhara. This oval-shaped plateau sits at an altitude of over 4000 metres,[1]: 29  and is surrounded by a ring of mountains, the Annapurna range, most of which are over 7000 metres.[2] With the only entrance being a narrow valley between the peaks of Hiunchuli and Machapuchare, where run-off from glaciers drains into the Modi Khola River, the Sanctuary was not penetrated by outsiders until 1956.[1]: 29  Because of the high mountains on all sides, the Annapurna Sanctuary receives only seven hours of sunlight a day at the height of summer.[1]: 29  The south-facing slopes are covered in dense tropical jungles of rhododendron and bamboo, while the north-facing slopes, in the rain shadow, have a drier colder climate similar to that of the near-by Tibetan Plateau."
            

        img1={Mountain5}
        img2={Mountain6}

            />
        </div>
    );
};

export default Destination;