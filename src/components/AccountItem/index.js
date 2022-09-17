import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Images';
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
        <Image src={data.avatar} className={cx('avatar')} alt={data.full_name}></Image>
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>{data.full_name}</span>
                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
            </h4>
            <span className={cx('username')}>{data.nickname}</span>
        </div>
    </Link>
}

export default AccountItem;