import { PlusCircle, SearchIcon } from 'lucide-react';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

export interface Option {
	id: string;
	label: string;
	value: string;
	feeder_count: string;
}

interface MultiSelectProps {
	options: Option[];
	isMulti: boolean;
	setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>;
	selectedOptions: Option[];
}

const MultiSelect = ({
	options,
	isMulti = true,
	setSelectedOptions,
	selectedOptions,
}: MultiSelectProps) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleToggleOption = (option: Option) => {
		if (isMulti) {
			setSelectedOptions((prevSelected) => {
				const isSelected = prevSelected.some(
					(selectedOption) => selectedOption.id === option.id
				);
				return isSelected
					? prevSelected.filter(
							(selectedOption) => selectedOption.id !== option.id
					  )
					: [...prevSelected, option];
			});
		} else {
			setSelectedOptions([option]);
			setIsOpen(false);
		}
	};

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleToggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setIsOpen(false);
		}
	};

	const handleClearSelection = () => {
		setIsOpen(false);
		setSelectedOptions([]);
	};

	// Attach click outside handler when dropdown is open
	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside);
		} else {
			document.removeEventListener('click', handleClickOutside);
		}

		// Cleanup event listener
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// Generate the label to be displayed in the button based on selected options
	const selectedLabel =
		isMulti && selectedOptions.length > 0 ? (
			selectedOptions.map((option) => option.label).join(', ')
		) : isMulti ? (
			<p className='flex justify-center items-center gap-5 border-black'>
				<PlusCircle /> District
			</p>
		) : selectedOptions.length > 0 ? (
			selectedOptions[0].label
		) : (
			<p className='flex justify-center items-center m-2'>
				<PlusCircle /> District
			</p>
		);

	return (
		<div className='relative w-40 h-60 text-start' ref={dropdownRef}>
			<button
				onClick={handleToggleDropdown}
				className=' border-gray-300 p-2 rounded-md focus:outline-none transition duration-500 ease-out w-[207px] h-[57px] px-4 py-5'
			>
				<div className='flex items-center justify-between border-dotted border-[1.5px]'>
					<span>{selectedLabel}</span>
					{isMulti && selectedOptions.length > 0 ? <div
							onClick={handleClearSelection}
							className='text-red-500 hover:text-red-700 focus:outline-none flex justify-between items-center px-5'
						>
							{/* <XIcon className='h-4 w-4' /> */}X
						</div> : null}
				</div>
			</button>
			{isOpen ? <div className='justify-center absolute top-0 left-0 mt-2 w-full border border-gray-300 rounded-md shadow-lg'>
					<div className='flex flex-col'>
						<div className='flex mt-7 items-center justify-center gap-4 '>
							<div className=' relative flex items-center pt-2'>
								<input
									type='text'
									placeholder='District'
									className='flex justify-center items-center border border-gray-300 p-1 rounded-md focus:outline-none pl-10 px-3 w-full'
									onChange={handleSearch}
								/>
								<div className='absolute inset-y-0 left-0 flex items-center pl-2'>
									<SearchIcon className='h-4 w-4 text-gray-400 mr-2 cursor-pointer' />
								</div>
							</div>
						</div>
						<div className='max-h-60 overflow-y-auto'>
							{filteredOptions.length === 0 ? (
								<div className='text-gray-500 flex justify-center items-center'>
									No data
								</div>
							) : (
								filteredOptions.map((option) => (
									<div
										key={option.id}
										className='flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100'
										onClick={() => handleToggleOption(option)}
									>
										{isMulti ? <input
												type='checkbox'
												checked={selectedOptions.some(
													(selectedOption) => selectedOption.id === option.id
												)}
												onChange={() => handleToggleOption(option)}
											/> : null}
										<div className='flex justify-between items-center w-full'>
											<div className='flex justify-between items-center w-full'>
												<div className='flex font-poppins tracking-[0.4%] font-normal uppercase text-xs'>
													{option?.label}
												</div>
												<div className='flex text-gray-500 font-poppins font-normal tracking-[0.4%] leading-[18px] text-xs'>
													{option?.feeder_count}
												</div>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</div> : null}
		</div>
	);
};

export default MultiSelect;
