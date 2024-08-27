import styles from './card.module.css';

interface CardProps {
  name: string;
  position: number;
  isFirst?: boolean;
}

export default function Card(props: CardProps) {
  const { name, position, isFirst } = props;
  return (
    <div className={styles.card}>
      <ul className={styles.cardContent}>
        {!isFirst && (
          <>
            <li className={styles.title}><strong>Nome</strong></li>
            <li className={styles.title}><strong>Ordem</strong></li>
          </>
        )}
        <li>{name}</li>
        <li>{position ?? 0}º</li>
      </ul>
    </div>
  );
}
