'use strict';

///////////////////////////////////////////////////////////////////
//                                                 MEMORY MODULE //
///////////////////////////////////////////////////////////////////

const memoryModule = (function () {
	const presets = {
		rock: {
			kick: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
			snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
			closedHH: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
			openHH: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			hiTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			midTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lowTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			tempo: 120,
			title: 'Rock',
			swing: false,
		},
		hipHop: {
			kick: [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
			snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
			closedHH: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
			openHH: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			hiTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			midTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lowTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			tempo: 110,
			title: 'Hip Hop',
			swing: false,
		},
		swing: {
			kick: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
			snare: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
			closedHH: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
			openHH: [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1],
			hiTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			midTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lowTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			tempo: 80,
			title: 'Swing',
			swing: 'sixteen',
		},
		inde: {
			kick: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
			snare: [0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0],
			closedHH: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
			openHH: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			hiTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			midTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lowTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			tempo: 108,
			title: 'Inde',
			swing: false,
		},
		rumba: {
			kick: [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
			snare: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			closedHH: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
			openHH: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
			hiTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
			midTom: [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
			lowTom: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
			tempo: 108,
			title: 'Rumba',
			swing: false,
		},
		rock32: {
			kick: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
			snare: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
			closedHH: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
			openHH: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
			hiTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
			midTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
			lowTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
			tempo: 120,
			title: 'Rock (32 beats)',
			swing: false,
		},
		bossaNova: {
			kick: [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
			snare: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
			closedHH: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			openHH: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			hiTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			midTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			lowTom: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			tempo: 68,
			title: 'Bossa Nova',
			swing: false,
		},
	};

	return {
		getPresets: function () {
			return presets;
		},

		getPresetTitles: function () {
			return presetTitles;
		},
	};
})();

///////////////////////////////////////////////////////////////////
//                                                  AUDIO MODULE //
///////////////////////////////////////////////////////////////////

const audioModule = (function () {
	const audioFiles = {
		kick: new Audio('audio/KICK.mp3'),
		snare: new Audio('audio/SNARE.mp3'),
		closedHH: new Audio('audio/CLOSEDHH.mp3'),
		openHH: new Audio('audio/OPENHH.mp3'),
		hiTom: new Audio('audio/HITOM.mp3'),
		midTom: new Audio('audio/MIDTOM.mp3'),
		lowTom: new Audio('audio/LOWTOM.mp3'),
	};

	const Instrument = function (name, vol, solo, mute) {
		this.vol = 80;
		this.solo = false;
		this.mute = false;
	};

	const instruments = {};

	const createInstruments = function () {
		for (let name in audioFiles) {
			instruments[name] = new Instrument(name);
		}
	};

	const hansSolo = function () {
		for (let instr in instruments) {
			if (instruments[instr].solo) {
				return true;
			}
		}
	};

	const toSoloOrNotToSolo = function (instr) {
		if (hansSolo()) {
			for (let instr in instruments) {
				if (instruments[instr].solo == false) {
					audioFiles[instr].volume = 0;
				} else if (instruments[instr].solo == true) {
					if (!instruments[instr].mute) {
						audioFiles[instr].volume = instruments[instr].vol / 100;
					}
				}
			}
		} else {
			for (let instr in instruments) {
				if (!instruments[instr].mute) {
					audioFiles[instr].volume = instruments[instr].vol / 100;
				}
			}
		}
	};

	return {
		getAudio: function () {
			return audioFiles;
		},

		getInstruments: function () {
			return instruments;
		},

		// TODO - if SOLO is false && an instrument is SOLO'ed - only store the volume

		// VOLUME HA STOPPED WORKIN FUTURE MIKE!
		changeVolume: function (instr, value) {
			if (!instruments[instr].solo && !hansSolo() && !instruments[instr].mute) {
				instruments[instr].vol = value;
				audioFiles[instr].volume = instruments[instr].vol / 100;
			} else if (instruments[instr].mute) {
				instruments[instr].vol = value;
			} else {
				instruments[instr].vol = value;
				audioFiles[instr].volume = instruments[instr].vol / 100;
			}
		},

		muteInstrument: function (instr) {
			audioFiles[instr].volume = 0;
			instruments[instr].mute = true;
		},

		unmuteInstrument: function (instr) {
			audioFiles[instr].volume = instruments[instr].vol / 100;
			instruments[instr].mute = false;
		},

		soloInstrument: function (instr) {
			instruments[instr].solo = true;
			toSoloOrNotToSolo(instr);
		},

		unsoloInstrument: function (instr) {
			instruments[instr].solo = false;
			toSoloOrNotToSolo(instr);
		},

		init: function () {
			createInstruments();
		},
	};
	// code here
})();

///////////////////////////////////////////////////////////////////
//                                                     UI MODULE //
///////////////////////////////////////////////////////////////////

const UIModule = (function () {
	const DOMObj = {
		// Instrument Rows
		kickRow: document.querySelector('.kickCheckboxes'),
		snareRow: document.querySelector('.snareCheckboxes'),
		closedHHRow: document.querySelector('.closedHHCheckboxes'),
		openHHRow: document.querySelector('.openHHCheckBoxes'),
		hiTomRow: document.querySelector('.hiTomCheckBoxes'),
		midTomRow: document.querySelector('.midTomCheckBoxes'),
		lowTomRow: document.querySelector('.lowTomCheckBoxes'),
		// Buttons
		playBtn: document.querySelector('#playBtn'),
		stopBtn: document.querySelector('#stopBtn'),
		loopBtn: document.querySelector('#loopBtn'),
		muteBtn: document.querySelectorAll('.mute-button'),
		soloBtn: document.querySelectorAll('.solo-button'),
		clearBtn: document.querySelector('#clearAllBtn'),
		// Inputs
		divisionSelector: document.querySelector('#division-selector'),
		tempoSlider: document.querySelector('.tempo-slider'),
		kickVolSlider: document.querySelector('#volume-slider'),
		presetSelector: document.querySelector('.preset-selector'),
		swingSelector: document.querySelector('#swing-selector'),
		// Outputs
		beatOutput: document.querySelector('#beat'),
		tempoOutput: document.querySelector('#tempo-output'),
		swingLabel: document.querySelector('#swing-label'),
		// Other Elements
		mainWindow: document.querySelector('.main-window'),
	};

	const clearGrid = function () {
		const selectedArr = document.querySelectorAll('.grid-btn-selected');

		if (selectedArr) {
			for (let i = 0; i < selectedArr.length; i++) {
				selectedArr[i].classList.remove('grid-btn-selected');
			}
		}
	};

	return {
		getDOMObj: function () {
			return DOMObj;
		},

		drawInstGrid: function (instrument, divisions) {
			if (DOMObj[instrument + 'Row']) {
				// Add the instrument title
				const instRow = DOMObj[instrument + 'Row'];
				instRow.innerHTML = `<div class="instr-title">${instrument}</div>`;

				// Add a mute and solo button
				instRow.innerHTML += `<div class="controls-container"><button id="${instrument}-mute" class="mute-button">M</button><button id="${instrument}-solo" class="solo-button">S</button></div>`;

				// Add volume slider
				instRow.innerHTML += `<div class="vol-container"><input id="${instrument}-volume" type="range" min="0" max="100" value="80"
                class="volume-slider">`;

				// Add the SelectAll checkbox
				const selAllBox = document.createElement('div');
				selAllBox.id = instrument + '-all';
				selAllBox.classList.add('grid-btn');
				selAllBox.classList.add('grid-select-all');
				instRow.insertAdjacentElement('beforeEnd', selAllBox);

				// Create checkboxes for the number of divisions requested
				for (let i = 0; i < divisions; i++) {
					const tempDiv = document.createElement('div');
					tempDiv.id = `${instrument}-${i}`;
					tempDiv.classList.add(instrument);
					tempDiv.classList.add('grid-btn');
					instRow.insertAdjacentElement('beforeEnd', tempDiv);
				}
			} else {
				console.warn('Error: Instrument does not exist');
			}
		},

		clearGrid: function () {
			clearGrid();
		},

		addPresetOptions: function (presets) {
			// array of keys
			const keys = Object.keys(presets);

			for (let i = 0; i < keys.length; i++) {
				DOMObj.presetSelector.innerHTML += `<option value="${keys[i]}">${presets[keys[i]].title}</option>`;
			}
		},

		drawPreset: function (preset, divisions) {
			clearGrid();

			let presetLength;
			// Check for the length of the preset (16 or 32)
			for (let row in preset) {
				presetLength = preset[row].length;
				break;
			}

			// if length of preset is 16...and the divisons are 16...do it once
			if (presetLength == 16 && divisions == 16) {
				for (let row in preset) {
					for (let i = 0; i < preset[row].length; i++) {
						let ele1 = document.getElementById(`${row}-${i}`);
						if (preset[row][i] == 1) {
							ele1.classList.add('grid-btn-selected');
						}
					}
				}
			} else if (presetLength == 16 && divisions == 32) {
				// if length of preset is 16 and divisons are 32 - double it up

				for (let row in preset) {
					for (let i = 0; i < preset[row].length; i++) {
						let ele1 = document.getElementById(`${row}-${i}`);
						if (preset[row][i] == 1) {
							ele1.classList.add('grid-btn-selected');
						}
					}
					for (let i = 0; i < preset[row].length; i++) {
						let ele1 = document.getElementById(`${row}-${i + 16}`);
						if (preset[row][i] == 1) {
							ele1.classList.add('grid-btn-selected');
						}
					}
				}
			} else if (presetLength == 32 && divisions == 32) {
				for (let row in preset) {
					for (let i = 0; i < preset[row].length; i++) {
						let ele1 = document.getElementById(`${row}-${i}`);
						if (preset[row][i] == 1) {
							ele1.classList.add('grid-btn-selected');
						}
					}
				}
			} else if (presetLength == 32 && divisions == 16) {
				return 'increaseDivisions';
			}

			// if the length of preset is 32 and divisions are 16 - tell the main module it needs to CHANGE DIVISIONS (i.e return seomthing)
		},

		updateSwingDisplay: function (option) {
			DOMObj.swingSelector.options[option].selected = true;
		},

		updateDivisionDisplay: function (divisions) {
			//Update option to 32 (there is not situation for changing to 16 so not needed)
			DOMObj.divisionSelector.options[1].selected = true;
		},

		updateBeatCounter: function (counter) {
			const ctrLen = counter.toString().length;
			if (ctrLen == 1) {
				DOMObj.beatOutput.textContent = `0${counter}`;
			} else {
				DOMObj.beatOutput.textContent = counter;
			}
		},

		resetBeatCounter: function () {
			DOMObj.beatOutput.textContent = '00';
		},

		updateTempoDisplay: function (tempo) {
			DOMObj.tempoOutput.textContent = tempo;
		},

		activateButton(button) {
			button.classList.add('active');
		},

		deactivateButton(button) {
			button.classList.remove('active');
		},

		toggleButton(button) {
			button.classList.toggle('active');
		},

		flashButton(button) {
			this.toggleButton(button);
			setTimeout(() => {
				this.toggleButton(button);
			}, 100);
		},
	};
})();

///////////////////////////////////////////////////////////////////
//                                                CENTRAL MODULE //
///////////////////////////////////////////////////////////////////

const centralModule = (function (audioModule, UIModule) {
	let divisions = 16;
	let runLoop = false;
	let tempo = 100;
	let loop = true;
	let eighthSwing = false;
	let sixteenthSwing = false;
	const instruments = audioModule.getAudio();
	const DOMObj = UIModule.getDOMObj();

	const volumes = [80, 80, 80, 80, 80, 80, 80];

	const addSwingListener = function () {
		const swingSelection = DOMObj.swingSelector;

		swingSelection.addEventListener('change', () => {
			if (swingSelection.value == 'off') {
				eighthSwing = false;
				sixteenthSwing = false;
				UIModule.deactivateButton(DOMObj.swingLabel);
			} else if (swingSelection.value == 'eight') {
				eighthSwing = true;
				sixteenthSwing = false;
				UIModule.activateButton(DOMObj.swingLabel);
			} else if (swingSelection.value == 'sixteen') {
				eighthSwing = false;
				sixteenthSwing = true;
				UIModule.activateButton(DOMObj.swingLabel);
			}
		});
	};

	const addBtnsListeners = function () {
		const playButton = DOMObj.playBtn.addEventListener('click', () => {
			if (!runLoop) {
				runLoop = true;
				play(divisions);
				UIModule.activateButton(DOMObj.playBtn);
			}
		});

		const stopButton = DOMObj.stopBtn.addEventListener('click', () => {
			stop();
			UIModule.deactivateButton(DOMObj.playBtn);
			UIModule.flashButton(DOMObj.stopBtn);
			UIModule.resetBeatCounter();
		});

		const loopBtn = DOMObj.loopBtn.addEventListener('click', () => {
			loop = !loop;
			UIModule.toggleButton(DOMObj.loopBtn);
		});

		const clearBtn = DOMObj.clearBtn.addEventListener('click', () => {
			UIModule.clearGrid();
			UIModule.flashButton(DOMObj.clearBtn);
		});
	};

	const addDivisionListener = function () {
		DOMObj.divisionSelector.addEventListener('change', function () {
			divisions = DOMObj.divisionSelector.value;
			drawInstGrids(divisions);
		});
	};

	const addPresetListener = function () {
		DOMObj.presetSelector.addEventListener('change', function () {
			const value = DOMObj.presetSelector.value;
			const preset = memoryModule.getPresets()[value];
			const checkDivisions = UIModule.drawPreset(preset, divisions);

			// Set tempo to preset tempo
			tempo = preset.tempo;
			DOMObj.tempoSlider.value = tempo;
			UIModule.updateTempoDisplay(tempo);

			// Set swing for preset
			let swingOption;
			if (preset.swing == 'sixteen') {
				sixteenthSwing = true;
				eighthSwing = false;
				UIModule.activateButton(DOMObj.swingLabel);
				swingOption = 2;
			} else if (preset.swing == 'eight') {
				sixteenthSwing = false;
				eighthSwing = true;
				UIModule.activateButton(DOMObj.swingLabel);
				swingOption = 1;
			} else {
				sixteenthSwing = false;
				eighthSwing = false;
				UIModule.deactivateButton(DOMObj.swingLabel);
				swingOption = 0;
			}

			UIModule.updateSwingDisplay(swingOption);

			// If the selected preset is longer than displayed grid - increase the divisions
			if (checkDivisions == 'increaseDivisions') {
				divisions = 32;
				drawInstGrids(divisions);
				UIModule.drawPreset(preset, divisions);
				UIModule.updateDivisionDisplay();
			}
		});
	};

	const addGridListener = function () {
		document.addEventListener('click', event => {
			if (event.target.classList.contains('grid-btn')) {
				event.target.classList.toggle('grid-btn-selected');
			}
		});
	};

	const addMuteSoloListeners = function () {
		// Mute & Solo Buttons
		document.addEventListener('click', event => {
			if (event.target.classList.contains('mute-button')) {
				const instrument = event.target.id.split('-')[0];

				if (!event.target.classList.contains('active')) {
					audioModule.muteInstrument(instrument);
					UIModule.activateButton(event.target);
				} else {
					document.querySelector;
					audioModule.unmuteInstrument(instrument);
					UIModule.deactivateButton(event.target);
				}
			}
		});

		document.addEventListener('click', event => {
			if (event.target.classList.contains('solo-button')) {
				const instrument = event.target.id.split('-')[0];

				if (!event.target.classList.contains('active')) {
					audioModule.soloInstrument(instrument);
					UIModule.activateButton(event.target);
				} else {
					audioModule.unsoloInstrument(instrument);
					UIModule.deactivateButton(event.target);
				}
			}
		});
	};

	const addSelAllListener = function () {
		document.addEventListener('click', function (event) {
			const ele1 = event.target.id;
			const ele2 = ele1.split('-');

			if (ele2[1] == 'all') {
				const ele3 = document.getElementsByClassName(ele2[0]);
				for (let i = 0; i < ele3.length; i++) {
					if (!event.target.classList.contains('grid-btn-selected')) {
						ele3[i].classList.add('grid-btn-selected');
					} else {
						ele3[i].classList.remove('grid-btn-selected');
					}
				}
			}
		});
	};

	const addSliderListeners = function () {
		const tempoSlider = DOMObj.tempoSlider;
		tempoSlider.addEventListener('input', () => {
			tempo = tempoSlider.value;
			UIModule.updateTempoDisplay(tempo);
		});

		tempoSlider.addEventListener('dblclick', () => {
			tempoSlider.value = 100;
			tempo = 100;
			UIModule.updateTempoDisplay(tempo);
		});

		const volSliders = DOMObj.mainWindow;
		volSliders.addEventListener('input', event => {
			const value = event.target.value;
			const instrument = event.target.id.split('-')[0];

			audioModule.changeVolume(instrument, value);
		});

		volSliders.addEventListener('dblclick', event => {
			event.target.value = 80;
			const instrument = event.target.id.split('-')[0];
			audioModule.changeVolume(instrument, 80);
		});
	};

	const addPresetOptions = function () {
		const presets = memoryModule.getPresets();

		UIModule.addPresetOptions(presets);
	};

	const drawInstGrids = function (divisions) {
		const instruments = audioModule.getAudio();

		for (let instr in instruments) {
			UIModule.drawInstGrid(instr, divisions);
		}
	};

	const playInst = function (counter, instrument) {
		const instrArr = document.querySelectorAll('.' + instrument);

		if (instrArr[counter - 1].classList.contains('grid-btn-selected')) {
			const sample = audioModule.getAudio()[instrument];

			// Mute the open HH when closed HH is played - a la real drums!
			if (instrument == 'closedHH') {
				const openHH = audioModule.getAudio()['openHH'];
				openHH.pause();
				openHH.currentTime = 0;
			}

			sample.currentTime = 0;
			sample.play();
		}
	};

	const play = function (divisions, counter = 0) {
		// if counter is odd - 67% of full two beats
		if (counter < divisions && runLoop) {
			let firstBeat, secondBeat;

			// if 16th swing is on ----
			if (!sixteenthSwing) {
				firstBeat = 60000 / (tempo * 4);
				secondBeat = 60000 / (tempo * 4);
			} else if (sixteenthSwing) {
				firstBeat = 0.65 * (2 * (60000 / (tempo * 4)));
				secondBeat = 0.35 * (2 * (60000 / (tempo * 4)));
			}

			// if 8th swing is on ----
			/* 
				Not sure how to deal with this scenario.
				8ths can be swung but where should 16ths inbetween be placed?
			*/

			// this plays the beats based on values decided above
			if (counter % 2 !== 0) {
				window.setTimeout(function playLoop() {
					counter++;
					// console.log(counter);
					UIModule.updateBeatCounter(counter);
					for (let instr in instruments) {
						playInst(counter, instr);
					}

					play(divisions, counter);
				}, firstBeat);
			} else if (counter % 2 == 0) {
				window.setTimeout(function playLoop() {
					counter++;
					// console.log(counter);
					UIModule.updateBeatCounter(counter);
					for (let instr in instruments) {
						playInst(counter, instr);
					}

					play(divisions, counter);
				}, secondBeat);
			}
		}

		// if counter is EVEN - 33% of full two beats

		// This stops START button being pressed again while loop is running
		if (counter == divisions && loop) {
			play(divisions, 0);
		} else if (counter == divisions) {
			// reset playButton
			UIModule.deactivateButton(DOMObj.playBtn);
			UIModule.flashButton(DOMObj.stopBtn);
			// reset counterDisplay
			UIModule.resetBeatCounter();
			runLoop = false;
		}
	};

	const stop = function () {
		runLoop = false;
	};

	return {
		init: function () {
			drawInstGrids(16);
			addBtnsListeners();
			addDivisionListener();
			addSelAllListener();
			addGridListener();
			addSliderListeners();
			addMuteSoloListeners();
			audioModule.init();
			addPresetListener();
			addPresetOptions();
			addSwingListener();
		},
	};

	// code here
})(audioModule, UIModule);

centralModule.init();
