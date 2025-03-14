import "./TripStyles.css"
import TripData from"./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination unsing google maps </p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading= "Trip to Pokhara"
                text= "Pokhara is a metropolitan city located in central Nepal, which serves as the capital of Gandaki Province and is declared as the tourism capital of Nepal.[4] It is the second most populous city of the nation after Kathmandu, with 599,504 inhabitants living in 120,594 households as of 2021.[3] It is the country's largest metropolitan city in terms of area. The city also serves as the headquarters of Kaski District.[5] Pokhara is located 200 kilometres (120 miles) west of the capital, Kathmandu. The city is on the shore of Phewa Lake, and sits at an average elevation of approximately 822 m above sea level.[6] The Annapurna Range, with three out of the ten highest peaks in the world—Dhaulagiri, Annapurna I and Manaslu—is within 15–35 mi (24–56 km) aerial range from the valley"
                />

<TripData 
                image={Trip2}
                heading= "Trip to Kathmandu"
                text= "Pokhara is a metropolitan city located in central Nepal, which serves as the capital of Gandaki Province and is declared as the tourism capital of Nepal.[4] It is the second most populous city of the nation after Kathmandu, with 599,504 inhabitants living in 120,594 households as of 2021.[3] It is the country's largest metropolitan city in terms of area. The city also serves as the headquarters of Kaski District.[5] Pokhara is located 200 kilometres (120 miles) west of the capital, Kathmandu. The city is on the shore of Phewa Lake, and sits at an average elevation of approximately 822 m above sea level.[6] The Annapurna Range, with three out of the ten highest peaks in the world—Dhaulagiri, Annapurna I and Manaslu—is within 15–35 mi (24–56 km) aerial range from the valley"
                />

<TripData 
                image={Trip3}
                heading= "Trip to Darchula"
                text= "Pokhara is a metropolitan city located in central Nepal, which serves as the capital of Gandaki Province and is declared as the tourism capital of Nepal.[4] It is the second most populous city of the nation after Kathmandu, with 599,504 inhabitants living in 120,594 households as of 2021.[3] It is the country's largest metropolitan city in terms of area. The city also serves as the headquarters of Kaski District.[5] Pokhara is located 200 kilometres (120 miles) west of the capital, Kathmandu. The city is on the shore of Phewa Lake, and sits at an average elevation of approximately 822 m above sea level.[6] The Annapurna Range, with three out of the ten highest peaks in the world—Dhaulagiri, Annapurna I and Manaslu—is within 15–35 mi (24–56 km) aerial range from the valley"
                />


                </div> 

        </div>
    )
}

export default Trip;
