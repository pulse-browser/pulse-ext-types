/**
 * Allows for access and modifications to the browser's internal preferences.
 * The available preferences can be seen from within `about:config`. With great
 * power comes great responsibility
 */
declare namespace experiments.prefs {
  /**
   * Finds a value within about config and will return it to you.
   *
   * @param name The name of the preference you wish to retrieve
   * @returns The value of the preference
   *
   * @throws An error if the type of the preference is not a string, boolean or number
   * @throws An error if Pulse cannot retrieve the preference
   */
  export function get(name: string): Promise<string | boolean | number | null>

  /**
   * Sets the value of a preference
   *
   * @param name The name of the preference you wish to set
   * @param value The value you wish to set the preference to
   */
  export function set(
    name: string,
    value: string | boolean | number
  ): Promise<unknown>

  /**
   * Allows for the resetting of a preference
   *
   * @param name The preference you wish to reset
   */
  export function reset(name: string): Promise<void>

  /**
   * Locks the value of a preference so it cannot be changed by the user in
   * `about:config`
   *
   * @param name The name of the preference you wish to lock
   */
  export function lock(name: string): Promise<void>

  /**
   * Unlocks a preference so it can be changed in `about:config`
   *
   * @param name The name of the preference you wish to unlock
   */
  export function unlock(name: string): Promise<void>

  /**
   * Checks if a preference is available to edit
   *
   * @param name The name of a preference you wish to check
   */
  export function isLocked(name: string): Promise<boolean>

  /**
   * Checks if the user has modified a specific preference value
   *
   * @param name The name of the preference you wish to check
   */
  export function hasUserValue(name: string): Promise<boolean>

  /**
   * Direct mapping to `Services.prefs.getChildList`
   *
   * @todo What does this do?
   */
  export function getChildList(name: string): Promise<unknown>

  /**
   * Listens for changes to an event.
   *
   * @todo Figure out the exact type for this
   */
  export const onChange: Listener<unknown>
}
