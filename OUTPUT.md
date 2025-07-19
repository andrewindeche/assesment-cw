[Example output - you should start from scratch]

## Changes Made

###[Component Name]

1. useEffect in line 37
   - Issue: useEffect missing dependencies causing stale state
   - Fix: Added required dependencies to useEffect array
2. Accessibility issue with the search icon line 98
   - Issue: search icon is not accessible
   - Fix: Added search icon to the input field

### [App.tsx] [SearchBar.tsx] [HeroSection.tsx]

1. All Functions in App.tsx page.
   <b>Changes</b>
   Header in line 79 converted to layout/Header.tsx,
   App in line 111 retained,

   BoxArea108 in line 45 converted to features/SearchBar,
   BoxArea97 in line 26 converted to layout/HeroSection,
   TagList in line 8 converted to features/Taglist
   - Issue: Monolithic page structure with multiple responsibilities.
   - Fix: Modularized structure into reusable feature based components.

### [SearchBar.tsx]  [HeroSection.tsx]

2. HeroSection naming in line 3 and Searchbar naming in line 7 
- Issue: Non-descriptive naming conventions reduces readability.
- Fix: Renamed components using clearer,descriptive names.

3. SearchBar in line 15 and 16
- Issue: UseEffect syncs initial value repeatedly leading to rerenders,excessive API calls
- Fix: Use debounce for delays and abstract the search logic into useDebouncedSearch hook

### [package.json] [package-lock.json] 

4. Use Prettier
- Issue: Spacing,inconsistent issues,Unreadable code 
- Fix: Add prettier rules to make code clean, consistent and readable. npm run format

### [App.tsx] [TagList.tsx]
5. App.tsx line 7
- Issue: Unused state setTags causing Lint bug
- Fix: remove unused state

6. TagListProps line 3
- Issue: Hardcoded tags, tags not reusable, destructured taglist needed connection to App.tsx
- Fix: Add prop to allow parent component(App.tsx) pass function when tag is clicked. 

### [TagList.tsx]
7. Line 14 and 16
- Issue: No index to distinguish tags
- Fix: Add an index to prevent inconsistencies for multiple tags

8. Line 19
- Issue: tags have no Accessibility
- Add Aria-Label for readability on tags