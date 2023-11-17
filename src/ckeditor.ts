/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";

import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import { Bold, Italic, Subscript, Superscript } from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { CloudServices } from "@ckeditor/ckeditor5-cloud-services";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { Image, ImageToolbar } from "@ckeditor/ckeditor5-image";
import { Indent } from "@ckeditor/ckeditor5-indent";
import { Link } from "@ckeditor/ckeditor5-link";
import { List, ListProperties } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { PageBreak } from "@ckeditor/ckeditor5-page-break";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import {
	SpecialCharacters,
	SpecialCharactersMathematical
} from "@ckeditor/ckeditor5-special-characters";
import { Style } from "@ckeditor/ckeditor5-style";
import {
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableToolbar
} from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";
import MathType from "@wiris/mathtype-ckeditor5";
import { HtmlEmbed } from "@ckeditor/ckeditor5-html-embed";

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

class Editor extends ClassicEditor {
	public static override builtinPlugins = [
		Autoformat,
		Base64UploadAdapter,
		BlockQuote,
		Bold,
		CloudServices,
		Essentials,
		GeneralHtmlSupport,
		Heading,
		Image,
		ImageToolbar,
		Indent,
		Italic,
		Link,
		List,
		ListProperties,
		MathType,
		MediaEmbed,
		PageBreak,
		Paragraph,
		PasteFromOffice,
		SpecialCharacters,
		SpecialCharactersMathematical,
		Style,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableToolbar,
		TextTransformation,
		HtmlEmbed
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				"heading",
				"|",
				"bold",
				"italic",
				"link",
				"bulletedList",
				"numberedList",
				"|",
				"outdent",
				"indent",
				"|",
				"blockQuote",
				"insertTable",
				"mediaEmbed",
				"undo",
				"redo",
				"MathType",
				"specialCharacters",
				"subscript",
				"superscript",
				"style",
				"htmlEmbed"
			]
		},
		language: "en",
		image: {
			toolbar: [
				"imageTextAlternative"
			]
		},
		table: {
			contentToolbar: [
				"tableColumn",
				"tableRow",
				"mergeTableCells",
				"tableCellProperties"
			]
		}
	};
}

export default Editor;
