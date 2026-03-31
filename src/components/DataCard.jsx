import { use} from "react";

import DataCards from "./DataCards";

const DataCard = ({dataPromise, carts, setCarts}) => {
  const DataCard = use(dataPromise)

  return (
    <div className="">
      

      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 mb-5 ">
        {
     DataCard.map(data => 
     <DataCards key={data.id} data={data} carts={carts} setCarts={setCarts}></DataCards>
)
        }
      </div>
    </div>
  );
};

export default DataCard;