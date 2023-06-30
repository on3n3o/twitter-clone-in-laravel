# Twitter clone in Laravel

> This instruction is provided for Linux (Ubuntu 22/Debian)

## Install composer dependencies

```bash
./install-composer-dependencies.sh
```
## Build

Build and start the application
```bash
./vendor/bin/sail up -d
./vendor/bin/sail migrate:fresh --seed
./vendor/bin/sail key:generate
./vendor/bin/sail npm run dev
```

You can alternatively add `alias sail="./vendor/bin/sail"` to `~/.bash_aliases` and `source ~/.bashrc` to use `sail` insead of `./vendor/bin/sail` in console.

The application is available on [http://localhost](http://localhost)