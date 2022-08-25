import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/13e8e0622556873e41d4425efc01453f~c5_100x100.jpeg?x-expires=1661612400&x-signature=yX5yPadlRpPoDFVR3hTOGB%2Bq%2Bp4%3D' className={cx('avatar')} alt='hoa'></img>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Nguyen Van A</span>
                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
            </h4>
            <span className={cx('username')}>nguyenvana</span>
        </div>
    </div>
}

export default AccountItem;