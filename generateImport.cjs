// Corrected content for generateImports.js or generateImports.cjs
const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, 'public/images/asset/building');
const outputFilePath = path.join(__dirname, 'src/data/imageImports.js');

fs.readdir(imagesDirectory, function (err, files) {
	if (err) {
		console.error('Error reading the images directory:', err);
		return;
	}

	const imports = files
		.filter((file) => file.endsWith('.jpg'))
		.map((file) => {
			const variableName = file
				.split('.')
				.slice(0, -1)
				.join('.')
				.replace(/[^a-zA-Z0-9]/g, '_');
			return `import ${variableName} from '../images/asset/building/${file}';`;
		});

	const exportLines = files
		.filter((file) => file.endsWith('.jpg'))
		.map((file) => {
			const variableName = file
				.split('.')
				.slice(0, -1)
				.join('.')
				.replace(/[^a-zA-Z0-9]/g, '_');
			return `  ${variableName},`;
		});

	const fileContent = `${imports.join('\n')}\n\nexport const images = {\n${exportLines.join('\n')}\n};`;

	fs.writeFile(outputFilePath, fileContent, function (err) {
		if (err) {
			console.error('Error writing the import file:', err);
			return;
		}
		console.log('Image imports file generated successfully!');
	});
});
