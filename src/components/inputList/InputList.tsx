import React from 'react';
import styles from './InputList.module.css';
import Card from '../card/card';

export default function InputList() {
  const [input, setInput] = React.useState<string>('');
  const [list, setList] = React.useState<string[]>([]);

  const handleAdd = (v: any) => {
    setInput(v);
  };

  const handleAddList = () => {
    if (input.trim() !== '') {
      setList([...list, input]);
      setInput(''); // Limpa o campo de input após adicionar à lista
    }
  };

  return (
    <>
      <h2>Adicione um produto</h2>
      <div className={styles.background}>
        <div className={styles.inputBox}>

          {/* Lista de cards Insira um valor e clique para adicionar */}
          <input
            className={styles.input}
            placeholder='Insira aqui'
            value={input} // Vincula o valor ao estado
            onChange={(value) => handleAdd(value.target.value)}
          />
          <button onClick={handleAddList}>Add</button>
        </div>

        {/* Lista de cards */}
        <div className={styles.cardContainer}>
          {list.map((item, index) => (
            <Card key={index}
              isFirst={index != 0}
              name={item}
              position={index + 1}
            />
          ))}
        </div>
      </div>
    </>
  );
}
