import { useState, useEffect } from 'react';

import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [searchField, setSearchfield] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setfilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setfilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchfield(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Maciej</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: "",
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users }
//         })
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Maciej</h1>
//         <SearchBox
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange}
//           placeholder='search monsters'
//         />
//         <Cardlist monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }

export default App;
