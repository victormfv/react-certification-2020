/* eslint-disable prettier/prettier */
import React from 'react';
import burger from '../assets/burger.svg';
import avatar from '../assets/avatar.svg';
import magnifying from '../assets/magnifying.svg';
import { useVideos } from '../state/VideosProvider';
import './Navigation.css';

function Navigation() {
	
	const { handleSubmit, handleSearchChange } =useVideos()

	return (
		<nav className="bg-lightblue-850 w-full flex relative justify-between items-center mx-auto px-8 h-20 text-white">
			<div className="flex">
				<a className="text-white w-16" href="/">
					<img src={burger} alt="Menu" />
				</a>
			</div>
			<form onSubmit={handleSubmit} className="w-full">
				<div className="flex-auto">
					<div className="flex pl-2 md:w-96 bg-opacity-20 bg-white rounded px-1  py-1">
						<div className="flex items-center justify-between  h-8 w-8">
							<img src={magnifying} alt="Profile" />
						</div>
						<input
							className="placeholder-opacity-50 w-full bg-transparent h-8 text-lg focus:outline-none  focus:border-transparent"
							placeholder="Search..."
							type="text"
							name="searchInput"
							onChange={handleSearchChange}
						/>
					</div>
				</div>
			</form>
			<div className="md:flex hidden justify-around w-48 ">
				<label htmlFor="input" className="flex items-center">
					<input
						className="relative w-10 h-4 top-0.5 transition-all duration-200 ease-in-out bg-gray-400 rounded-full shadow-inner outline-none appearance-none "
						type="checkbox"
					/>
					<span className="ml-2">Dark Mode</span>
				</label>

				<div className="bg-gray-350 rounded-full h-11 w-11 flex items-center justify-center">
					<a className="text-white" href="/">
						<img src={avatar} alt="Profile" />
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
