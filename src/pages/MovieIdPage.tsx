
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { useMovie } from '../components/customHooks/useMovie'
import ModalAdd from '../components/ModalAddSample'
import classes from '../components/styles/moviePage.module.css'
import ManageBtn from '../components/UI/ManageList/ManageBtn'
import { IStoreItem, ModalEnum, MovieAsctionEnum, WatchListEnum } from '../models'

const MovieIdPage = () => {

    type fetchParams = {
        id: string
    }

    const params = useParams<fetchParams>()   
    const { loading, error, movie } = useMovie(params.id)    
    const dispatch = useDispatch()

    dispatch({
        type: MovieAsctionEnum.pick, 
        payload: movie
    })

    const open = useSelector((state: IStoreItem) => state.modalOpen)
    const content = useSelector((state: IStoreItem) => state.content)
    const isDeleted = useSelector((state: IStoreItem) => state.deleted )
    const watchList = useSelector((state: IStoreItem) => state.watchList)
    const item = useSelector((state: IStoreItem) => state.item)

    function imgDefault ({ currentTarget }:any) {
        currentTarget.onerror = null
        currentTarget.src = 'https://i.kym-cdn.com/photos/images/facebook/000/483/553/f73.png'
    }

  return (
    <>
    { isDeleted && <Navigate to={'/posts'}/> }
    { loading && <p className='text-5xl text-black'>loading</p> }
    { error && <Navigate to={'/error'}/> }
    {
        <div className={ classes.movieWrapper }>
            <h1 className={ classes.movieHeading }>
                { movie?.title }
                { watchList.includes(item?.id) &&
                    <p className='text-green-700 text-sm'>
                        Already in WatchList
                    </p>
                }
            </h1>
            <div className={ classes.movieContainer }>
                <img 
                    src={ movie?.poster_path } 
                    alt={ movie?.title } 
                    className={ classes.image }
                    onError={ imgDefault }
                />
                <div className={ classes.movieInfo }>
                    <h3 className={ classes.movieTagline }>
                    <span className={ classes.movieSpan }>Tagline:</span> { movie?.tagline }
                    
                    </h3>
                    <p className={ classes.movieGenres }>
                        <span className={ classes.movieSpan }>Genres:</span> { movie?.genres.join(', ') }
                    </p>
                    <p className={ classes.movieRelease }>
                        <span className={ classes.movieSpan }>Date of release:</span> { movie?.release_date }
                    </p>
                    <p className={ classes.movieRuntime }>
                        <span className={ classes.movieSpan }>Runtime:</span> { movie?.runtime } mins. 
                    </p>
                    <p className={ classes.movieOverwiew }>
                        <span className={ classes.movieSpan }>Overview:</span> { movie?.overview }
                    </p>
                    <div className={ classes.movieNumbers }>
                        <div className={ classes.movieNumbersContainer }>
                            <h4 className={ classes.numbersHeading }>
                                Budget
                            </h4>
                            <span className={ classes.number }>
                                { movie?.budget } $
                            </span>
                        </div>
                        <div className={ classes.movieNumbersContainer }>
                            <h4 className={ classes.numbersHeading }>
                                Revenue
                            </h4>
                            <span className= {classes.number }>
                                { movie?.revenue } $
                            </span>
                        </div>
                        <div className={ classes.movieNumbersContainer }>
                            <h4 className={ classes.numbersHeading}>
                                Votes Count
                            </h4>
                            <span className={ classes.number }>
                                { movie?.vote_count }
                            </span>
                        </div>
                        <div className={ classes.movieNumbersContainer }>
                            <h4 className={ classes.numbersHeading }>
                                Vote Average
                            </h4>
                            <span className={ classes.number }>
                                { movie?.vote_average }
                            </span>
                        </div>
                    </div>
                    <div className={ classes.buttons }>
                        <ManageBtn onClick={ ()=>{
                            dispatch(
                                {type: ModalEnum.open, 
                                payload: true
                            })
                            dispatch(
                                {type: ModalEnum.setContent, 
                                payload: 'edit'
                            })
                        } }
                        >
                            Edit film
                        </ManageBtn>
                        <ManageBtn onClick={ ()=>{
                            dispatch({
                                type: ModalEnum.open, 
                                payload: true
                            })
                            dispatch({
                                type: ModalEnum.setContent, 
                                payload: 'delete'
                            })
                        } }
                        >
                            Delete film
                        </ManageBtn>
                        { !watchList.includes(item?.id) &&
                            <ManageBtn onClick={ ()=>{                           
                                dispatch({
                                    type: WatchListEnum.push,
                                    movie: movie?.id
                                })
                            } }
                            >
                            Add to WatchList
                        </ManageBtn>
                        }
                        { open && 
                            <ModalAdd 
                                visible={ open } 
                                setVisible={ open } 
                                content={ content }
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    }        
    </>
  )
}

export default MovieIdPage