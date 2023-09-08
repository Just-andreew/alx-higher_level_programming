def text_indentation(text):
    # Check if the input is a string
    if not isinstance(text, str):
        raise TypeError("text must be a string")

    # Initialize an empty string to store the indented text
    indented_text = ""

    # Initialize a flag to keep track of whether we are in a whitespace block
    in_whitespace = False

    # Iterate over each character in the input text
    for char in text:
        # Check if the character is one of the specified punctuation marks
        if char in ".?:":
            # Add the punctuation mark to the indented text
            indented_text += char
            # Add two newlines after the punctuation mark
            indented_text += "\n\n"
            # Set the flag to indicate that we are in a whitespace block
            in_whitespace = True
        else:
            # If the character is not a punctuation mark, add it to the indented text
            indented_text += char
            # If we are in a whitespace block, add a newline after the character
            if in_whitespace:
                indented_text += "\n"
                in_whitespace = False

    # Print the indented text without leading or trailing spaces
    print(indented_text.strip())
