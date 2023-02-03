import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName("");
    console.log(guests);
  };
  return (
    <div>
      <h3>Guest List</h3>
      <div>
        {guests.map((guest) => (
          <div key={guest}>{guest}</div>
        ))}
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
