import { services } from "../constants/index.js";


import { ServiceCard } from "../components/ServiceCard.jsx";


export const Services = () => {
    return (
        <div className="max-container flex justify-center flex-wrap gap-9">
            {
                services.map((service, index) => (
                    <ServiceCard key={index} imgURL={service.imgURL} label={service.label} subtext={service.subtext} />
                )
                )
            }
        </div>
    )
}