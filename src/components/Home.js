import React, { useEffect } from 'react'
import styled from "@emotion/styled";
import ImageSlider from './ImageSlider'
import NewDisney from './NewDisney'
import Originals from './original'
import RecommendedMovies from './RecommendedMovies'
import Viewers from './Viewers'
import Trending from "./Trending"
import { trending, originals, recommendedForYou } from "../apiURL/apiURL"
import { useDispatch } from "react-redux";
import useHttp from '../utils/useHttp';
import { setMovies } from '../features/movieSlice';
import {Box} from "@chakra-ui/react"

const Home = () => {
	const dispatch = useDispatch()
	const [trendingMovies, isLoadingTrending ] = useHttp(trending);
	const [originalMovies, isLoadingOriginal ] = useHttp(originals);
	const [recommended, isLoadingRecommended] = useHttp(recommendedForYou);

	useEffect(() => {
		dispatch(
		  setMovies({
			trending: trendingMovies,
			originals: originalMovies,
			recommendedForYou: recommended,
		  })
		)
	}, [trendingMovies, originalMovies, recommended, dispatch])
	return (
		<Container>
			<ImageSlider isLoading={isLoadingTrending}/>
			<Viewers isLoading={isLoadingRecommended} />
			<RecommendedMovies isLoading={isLoadingRecommended} />
			<NewDisney isLoading={isLoadingRecommended} />
			<Originals isLoading={isLoadingOriginal} />
			<Trending isLoading={isLoadingTrending} />
		</Container>
	)
}

export default Home

const Container = styled(Box)`
	min-height: calc(100vh - 250px);
	position: relative;
	color: white;
	background-color: #040714;


	&:before {

		background: url("/images/home-background.png") center center / cover
		no-repeat fixed;
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: -1;
	}
`