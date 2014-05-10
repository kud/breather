#!/bin/sh
echo "\n❯ Installing ruby dependencies..."
gem install terminal-notifier
echo "\n❯ Copying configuration..."
cp -n config/.breather ~/.breather
echo "\n❯ Done!"
