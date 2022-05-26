const helpOption: Fig.Option[] = [
  {
    name: ["--help", "-h"],
    description: "Show help",
  },
];

const tokenOption: Fig.Option[] = [
  {
    name: ["--token", "-t"],
    description:
      "Access token for user authentication; $ST2_AUTH_TOKEN by default",
  },
];

const tokenOnlyOption: Fig.Option[] = [
  {
    name: ["--token-only", "-t"],
    description:
      "On successful authentication, print only token to the console",
  },
];

const apiKeyOption: Fig.Option[] = [
  {
    name: "--api-key",
    description: "Api Key for user authentication; $ST2_API_KEY by default",
  },
];

const jsonOption: Fig.Option[] = [
  {
    name: ["--json", "-j"],
    description: "Print output in JSON format",
  },
];

const yamlOption: Fig.Option[] = [
  {
    name: ["--yaml", "-y"],
    description: "Print output in YAML format",
  },
];

const commonOptions: Fig.Option[] = [
  ...helpOption,
  ...tokenOption,
  ...apiKeyOption,
  ...jsonOption,
  ...yamlOption,
];

const helpJsonYamlOption: Fig.Option[] = [
  ...helpOption,
  ...jsonOption,
  ...yamlOption,
];

const attrOption: Fig.Option[] = [
  {
    name: "--attr",
    description:
      "List of attributes to include in the output; 'all' or unspecified will return all attributes",
    args: {
      name: "ATTR",
      isVariadic: true,
      suggestions: ["all"],
    },
  },
];

const keyOption: Fig.Option[] = [
  {
    name: ["--key", "-k"],
    description:
      "If result is type of JSON, then print specific key-value pair; dot notation for nested JSON is supported",
    args: {
      name: "KEY",
    },
  },
];

const detailOption: Fig.Option[] = [
  {
    name: ["--detail", "-d"],
    description: "Display full detail of the execution in table format",
  },
];

const widthOption: Fig.Option[] = [
  {
    name: ["--width", "-w"],
    description: "Set the width of columns in output",
    args: {
      name: "WIDTH",
      isVariadic: true,
      suggestions: ["25"],
    },
  },
];

const packOption: Fig.Option[] = [
  {
    name: ["--pack", "-p"],
    description: "Only return resources belonging to the provided pack",
    args: {
      name: "PACK",
      isVariadic: true,
      suggestions: ["core"],
    },
  },
];

const delayOption: Fig.Option[] = [
  {
    name: "--delay",
    description:
      "How long (in milliseconds) to delay the execution before scheduling",
    args: {
      name: "DELAY",
    },
  },
];

const tailOption: Fig.Option[] = [
  {
    name: "--tail",
    description: "Automatically start tailing new execution",
  },
];

const traceOptions: Fig.Option[] = [
  {
    name: ["--trace-tag", "--trace_tag"],
    description: "A trace tag string to track execution later",
    args: {
      name: "TRACE_TAG",
    },
  },
  {
    name: "--trace-id",
    description: "Existing trace id for this execution",
    args: {
      name: "TRACE_ID",
    },
  },
];

const autoDictOption: Fig.Option[] = [
  {
    name: "--auto-dict",
    description:
      "Automatically convert list items to dictionaries when colons are detected",
  },
];

const asyncOption: Fig.Option[] = [
  {
    name: ["--async", "-a"],
    description: "Do not wait for action to finish",
  },
];

const inheritEnvOption: Fig.Option[] = [
  {
    name: ["--inherit-env", "-e"],
    description:
      "Pass all the environment variables which are accessible to the CLI as 'env' parameter to the action; only works with python, local and remote runners",
  },
];

const userOption: Fig.Option[] = [
  {
    name: ["--user", "-u"],
    description: "User under which to run the action (admins only)",
  },
];

const passwordOption: Fig.Option[] = [
  {
    name: ["--password", "-p"],
    description:
      "Password for the user. If password is not provided, it will be prompted for",
    args: {
      name: "PASSWORD",
    },
  },
];

const writePasswordOption: Fig.Option[] = [
  {
    name: ["--write-password", "-w"],
    description:
      "Write the password in plain text to the config file (default is to omit it)",
  },
];

const ttlOption: Fig.Option[] = [
  {
    name: ["--ttl", "-l"],
    description:
      "The life span of the token in seconds. Max TTL configured by the admin supersedes this",
    args: {
      name: "TTL",
    },
  },
];

const removeFilesOption: Fig.Option[] = [
  {
    name: ["--remove-files", "-r"],
    description: "Remove action files from disk",
  },
];

const refOrIdArg: Fig.Arg[] = [
  {
    name: "ref-or-id",
    description: "Action reference (pack.action_name)",
  },
];

const parametersArg: Fig.Arg[] = [
  {
    name: "parameters",
    description: "List of keyword args, positional args, and optional args",
  },
];

const fileArg: Fig.Arg[] = [
  {
    name: "file",
    description: "JSON/YAML file containing the definition to create",
    template: "filepaths",
  },
];

const usernameArg: Fig.Arg[] = [
  {
    name: "username",
    description: "Name of the user to authenticate",
  },
];

const keyOrIdArg: Fig.Arg[] = [
  {
    name: "key-or-id",
    description: "Key_Or_Id of the api key",
  },
];

const completionSpec: Fig.Spec = {
  name: "st2",
  description: "CLI for StackStorm event-driven automation platform",
  parserDirectives: {
    optionsMustPrecedeArguments: true,
  },
  subcommands: [
    {
      name: "run",
      description: "Invoke an action manually",
      options: [
        ...commonOptions,
        ...attrOption,
        ...detailOption,
        ...keyOption,
        ...delayOption,
        ...tailOption,
        ...autoDictOption,
        ...asyncOption,
        ...inheritEnvOption,
        ...userOption,
      ],
      args: [...refOrIdArg, ...parametersArg],
    },
    {
      name: "action",
      description:
        "An activity that happens as a response to the external event",
      subcommands: [
        {
          name: "list",
          description: "Get the list of actions",
          options: [...commonOptions, ...attrOption, ...widthOption],
        },
        {
          name: "get",
          description: "Get individual action",
          options: [...commonOptions, ...attrOption],
          ...refOrIdArg,
        },
        {
          name: "create",
          description: "Create a new action",
          options: [...commonOptions],
          ...fileArg,
        },
        {
          name: "update",
          description: "Update an existing action",
          options: [...commonOptions],
          args: [...refOrIdArg, ...fileArg],
        },
        {
          name: "delete",
          description: "Delete an existing action",
          options: [...commonOptions, ...removeFilesOption],
          ...refOrIdArg,
        },
        {
          name: "enable",
          description: "Enable an existing action",
          options: [...commonOptions],
          ...refOrIdArg,
        },
        {
          name: "disable",
          description: "Disable an existing action",
          options: [...commonOptions],
          ...refOrIdArg,
        },
        {
          name: "execute",
          description: "Invoke an action manually",
          options: [
            ...commonOptions,
            ...attrOption,
            ...detailOption,
            ...keyOption,
            ...delayOption,
            ...tailOption,
            ...autoDictOption,
            ...traceOptions,
            ...asyncOption,
            ...inheritEnvOption,
          ],
          ...refOrIdArg,
        },
      ],
    },
    {
      name: "action-alias",
      description: "Action aliases",
      subcommands: [
        {
          name: "list",
          description: "Get the list of actions",
          options: [
            ...commonOptions,
            ...attrOption,
            ...widthOption,
            ...packOption,
          ],
        },
        {
          name: "get",
          description: "Get individual action alias",
          options: [...commonOptions, ...attrOption],
          ...refOrIdArg,
        },
        {
          name: "create",
          description: "Create a new action alias",
          options: [...commonOptions],
          ...fileArg,
        },
        {
          name: "update",
          description: "Update an existing action alias",
          options: [...commonOptions],
          args: [...refOrIdArg, ...fileArg],
        },
        {
          name: "delete",
          description: "Delete an existing action alias",
          options: [...commonOptions],
          ...refOrIdArg,
        },
        {
          name: "match",
          description: "Get the action alias that match the command text",
          options: [...commonOptions, ...attrOption, ...widthOption],
          args: {
            name: "command",
            description: "Get the action alias that match the command text",
          },
        },
        {
          name: "execute",
          description:
            "Execute the command text by finding a matching action alias",
          options: [...commonOptions, ...userOption],
          ...refOrIdArg,
        },
      ],
    },
    {
      name: "auth",
      description: "Authenticate user and acquire access token",
      options: [
        ...helpJsonYamlOption,
        ...passwordOption,
        ...ttlOption,
        ...tokenOnlyOption,
      ],
      ...usernameArg,
    },
    {
      name: "login",
      description:
        "Authenticate user, acquire access token, and update CLI config directory",
      options: [
        ...helpJsonYamlOption,
        ...passwordOption,
        ...ttlOption,
        ...writePasswordOption,
      ],
      ...usernameArg,
    },
    {
      name: "whoami",
      description: "Display the currently authenticated user",
      options: [...helpJsonYamlOption],
    },
    {
      name: "apikey",
      description: "API Keys",
      options: [...helpJsonYamlOption],
      subcommands: [
        {
          name: "list",
          description: "Get the list of api keys",
          options: [
            ...commonOptions,
            ...widthOption,
            ...userOption,
            ...detailOption,
            {
              name: "--show-secrets",
              description: "Full list of attributes",
            },
          ],
        },
        {
          name: "get",
          description: "Get individual api key",
          options: [...commonOptions, ...attrOption],
          ...keyOrIdArg,
        },
      ],
      // get                 Get individual api key.
      // create              Create a new api key.
      // delete              Delete an existing api key.
      // enable              Enable an existing api key.
      // disable             Disable an existing api key.
      // load                Load api key from a file.
    },
  ],
  options: [
    ...helpOption,
    {
      name: "--version",
      description: "Show version for st2",
    },
    {
      name: "--url",
      description:
        "Base URL for the API servers; assumes all servers use the same base URL and default ports are used; $ST2_BASE_URL by default",
      args: {
        name: "BASE_URL",
      },
    },
    {
      name: "--auth-url",
      description:
        "URL for the Authentication server; $ST2_AUTH_URL by default",
      args: {
        name: "AUTH_URL",
      },
    },
    {
      name: "--api-url",
      description: "URL for the API server; $ST2_API_URL by default",
      args: {
        name: "API_URL",
      },
    },
    {
      name: "--stream-url",
      description: "URL for the Stream server; $ST2_STREAM_URL by default",
      args: {
        name: "STREAM_URL",
      },
    },
    {
      name: "--api-version",
      description: "API version to use; $ST2_API_VERSION by default",
      args: {
        name: "API_VERSION",
      },
    },
    {
      name: "--cacert",
      description:
        "Path to the CA cert bundle for the SSL endpoints; $ST2_CACERT by default; if this is not provided, then SSL cert will not be verified",
      args: {
        name: "CACERT",
      },
    },
    {
      name: "--config-file",
      description: "Path to the CLI config file",
      args: {
        name: "CONFIG_FILE",
        template: "filepaths",
      },
    },
    {
      name: "--print-config",
      description: "Parse the config file and print the values",
    },
    {
      name: "--skip-config",
      description: "Don't parse and use the CLI config file",
    },
    {
      name: "--debug",
      description: "Enable debug mode",
    },
  ],
};
export default completionSpec;
