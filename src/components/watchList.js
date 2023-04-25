import { Grid, Heading, Image } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectWatchList } from '../features/detailSlice';
import { Wrap } from './wrap';

const WatchList = () => {
	const watchList = useSelector(selectWatchList);
	const watchListSet = new Set(watchList.map(watch => watch.id));
	const uniqueWatchList = Array.from(watchListSet, (id) => watchList.find(watch => watch.id === id));
  return (
	  <Grid mt={5} mb={20} maxW={{ sm: "550px", md: "700px", lg: "1200px" }} mx="auto" templateColumns={{ sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }} gap="3">
		  {
			  uniqueWatchList.length === 0
				  ? <Heading color="#fff" w="500px">No Movies in WatchList Yet</Heading>
				  : uniqueWatchList?.map((watch)=> (
				<Wrap key={watch.id}  maxW={{base: "150px", sm: "200px", md: "220px", lg: "250px"}} maxH={{base: "200px", sm: "250px", md: "270px", lg: "300px"}} mx="auto">
					<Link to={`/detail/`+ watch.id}>
					<Image src={`https://image.tmdb.org/t/p/original${watch.backdrop_path}`} alt={watch.title} />
					</Link>
				</Wrap>)
			)
		  }
	</Grid>
  )
}

export default WatchList;