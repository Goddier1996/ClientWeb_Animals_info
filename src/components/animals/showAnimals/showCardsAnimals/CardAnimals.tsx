
const CardAnimals: React.FC<{
  node: any;
  clickToImageForInfo: Function;
  start: Function;
}> = ({ node, clickToImageForInfo, start }) => {



  return (
    <>
      <div key={node._id} className="cardx">
        <div className="card_image">
          <img
            src={node.image}
            alt="image animal"
            onClick={() =>
              clickToImageForInfo(node._id)
            }
          />
        </div>

        <div className="card_title title-white">
          <h6>{node.title}</h6>

          <img
            onClick={() =>
              start(node._id)
            }
            src={require("../../../../images/bowel1.png")}
            alt="give eat"
          ></img>
        </div>
      </div>
    </>
  );
};


export default CardAnimals;