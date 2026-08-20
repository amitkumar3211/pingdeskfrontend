#!/usr/bin/env python3
"""Splice a batch of per-slug content into a *Content.js data file.

Usage: python3 scripts/append-content.py <target.js> <batch.txt> <varName>
The batch file holds raw JS object entries (`slug: {...},`).
"""
import io, sys

target, batch_file, var = sys.argv[1], sys.argv[2], sys.argv[3]
src = io.open(target, encoding='utf-8').read()
batch = io.open(batch_file, encoding='utf-8').read().strip()

marker = '\n};\n\nexport default %s;' % var
if marker not in src:
    sys.exit('marker not found in %s' % target)

# Guard against writing the same slug twice.
for line in batch.splitlines():
    stripped = line.strip()
    if stripped.endswith(': {') and not stripped.startswith('//'):
        slug = stripped[:-3].strip().strip("'\"")
        if '\n  %s: {' % slug in src:
            sys.exit('duplicate slug already present: %s' % slug)

src = src.replace(marker, '\n' + batch + marker)
io.open(target, 'w', encoding='utf-8').write(src)
print('appended %d bytes to %s' % (len(batch), target))
