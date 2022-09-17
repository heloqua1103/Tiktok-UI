import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { wrapper as PopperWrapper } from '~/components/Popper';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)


function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setLoading(false)
                setSearchResult(res.data)
            })
            .catch(() => {
                setLoading(false)
            })

    }, [searchValue])

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (<HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={attrs => (
            <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                <PopperWrapper>
                    <h4 className={cx('search-title')}>
                        Accounts
                    </h4>
                    {searchResult.map(result => (
                        <AccountItem key={result.id} data={result}></AccountItem>
                    ))}
                </PopperWrapper>
            </div>
        )}
        onClickOutside={handleHideResult}
    >
        <div className={cx('search')}>
            <input
                ref={inputRef}
                value={searchValue}
                placeholder='Search accounts and videos'
                spellCheck={false}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
            />
            {!!searchValue && !loading && (
                <button className={cx('clear')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            )}

            {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    </HeadlessTippy>);
}

export default Search;