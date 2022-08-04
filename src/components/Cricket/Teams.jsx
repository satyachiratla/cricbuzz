import Modal from "../UI/Modal";
import Teamlist from "./Teamlist";

const Teams = (props) => {
  const teamslist = [
    [
      { id: 1, name: "Rohit Sharma (c)", type: "Batsmen" },
      { id: 2, name: "Ishan Kishan", type: "Batsmen" },
      { id: 3, name: "Surya Kumar Yadav", type: "Batsmen" },
      { id: 4, name: "Tilak Varma", type: "Batsmen" },
      { id: 5, name: "Dewald Brevis", type: "Batsmen" },
      { id: 6, name: "Tim David", type: "Batsmen" },
      { id: 7, name: "Kieron Pollard", type: "Allrounder" },
      { id: 8, name: "Jofra Archer", type: "Allrounder" },
      { id: 9, name: "Mayank Markande", type: "Bowler" },
      { id: 10, name: "Jasprit Bumrah", type: "Bowler" },
      { id: 11, name: "Basil Thampi", type: "Bowler" },
    ],
    [
        {id: 1, name: 'M.S Dhoni (c)', type: 'Batsmen'},
        {id: 2, name: 'Ruturaj Gaikwad', type: 'Batsmen'},
        {id: 3, name: 'Devon Convoy', type: 'Batsmen'},
        {id: 4, name: 'Ambati Rayudu', type: 'Batsmen'},
        {id: 5, name: 'Moeen Ali', type: 'Allrounder'},
        {id: 6, name: 'Shivam Dhube', type: 'Allrounder'},
        {id: 7, name: 'Ravindra Jadeja', type: 'Allrounder'},
        {id: 7, name: 'Dwayne Bravo', type: 'Allrounder'},
        {id: 9, name: 'Deepak Chahar', type: 'Bowler'},
        {id: 10, name: 'Chris Jordan', type: 'Bowler'},
        {id: 11, name: 'Mukesh Chowdhary', type: 'Bowler'},
    ]
  ];

  return (
    <Modal onClose={props.onHideScoreboard}>
      <Teamlist teamlist={teamslist} />
    </Modal>
  );
};

export default Teams;
