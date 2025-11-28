import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ playerSelected, removePlayer,  setToggle}) => {
    return (
        <div className="mb-50 max-w-[1200px] mx-auto">
            {playerSelected.map(player => (
                <SelectedCard
                    key={player.id}
                    player={player}
                    removePlayer={removePlayer}
                />
            ))}

            <button onClick={() => setToggle(false)} className="btn mt-4 mb-5 px-4 py-3 bg-amber-300 rounded-lg w-full">
               Add More Players
            </button>
        </div>
    );
};

export default SelectedPlayers;
