import { useMemo } from 'react';

import { useQuery } from 'loot-core/client/query-hooks';
import { q } from 'loot-core/shared/query';
import { type NoteEntity } from 'loot-core/types/models';

export function useNotes(id: string) {
  const { data } = useQuery<NoteEntity>(
    () => q('notes').filter({ id }).select('*'),
    [id],
  );
  return useMemo(() => (data && data.length > 0 ? data[0].note : null), [data]);
}
