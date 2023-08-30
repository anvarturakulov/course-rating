import { PProps } from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
    return (  
        <p
            className={cn(styles.p, className, {
                [styles.size_s]: size == 's',
                [styles.size_m]: size == 'm',
                [styles.size_l]: size == 'l',
            },
            )}
            {...props}
        >
            {children}
        </p>
    );
};