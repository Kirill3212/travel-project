import styles from './loadingRouter.module.scss';
import loadingRouter from '../../assets/loadingRouter.gif';
import { Text } from '../../shared/ui';

const LoadingRouter = () => {
  return (
    <div className={styles.loadingRouter}>
      <img src={loadingRouter} alt='loading image' className={styles.loadingRouter_image} />
      <div className={styles.loadingRouter_message}>
        <Text tag={'h4'} weight={'medium'} size={'s'} color={'blue'}>
          Loading...
        </Text>
      </div>
    </div>
  );
};

export default LoadingRouter;
