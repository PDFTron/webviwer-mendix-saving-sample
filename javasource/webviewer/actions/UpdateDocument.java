// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package webviewer.actions;

import java.io.InputStream;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixIdentifier;
import com.mendix.webui.CustomJavaAction;
import webviewer.proxies.File;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class UpdateDocument extends CustomJavaAction<java.lang.Void>
{
	private java.lang.String fileId;
	private IMendixObject __Parameter;
	private webviewer.proxies.File Parameter;

	public UpdateDocument(IContext context, java.lang.String fileId, IMendixObject Parameter)
	{
		super(context);
		this.fileId = fileId;
		this.__Parameter = Parameter;
	}

	@java.lang.Override
	public java.lang.Void executeAction() throws Exception
	{
		this.Parameter = this.__Parameter == null ? null : webviewer.proxies.File.initialize(getContext(), __Parameter);

		// BEGIN USER CODE
		// With the file ID we got from the request, create an identifier object
		IMendixIdentifier id = Core.createMendixIdentifier(fileId);
		// Load the original object from the context
		File origFile = File.load(getContext(), id);
		// Get the file data we got from the request to write into the original object
		InputStream stream = Core.getFileDocumentContent(getContext(), this.Parameter.getMendixObject());
		origFile.setContents(getContext(), stream, this.Parameter.getSize());
		origFile.commit();
		// Delete the new file object created when we sent the update request
		this.Parameter.delete();
		this.Parameter.commit();

		return null;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "UpdateDocument";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}